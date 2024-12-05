import prisma from "../database/connection";

interface TaskPayload {
  taskName: string;
  priority: number;
  index?: number;
}

class TaskService {
  async createTask(payload: TaskPayload) {
    const maxIndex = await prisma.task.aggregate({ _max: { index: true } });
    const index = (maxIndex._max.index || 0) + 1;

    return await prisma.task.create({
      data: { ...payload, index },
    });
  }

  async listTasks() {
    return await prisma.task.findMany({ orderBy: { index: "asc" } });
  }

  async updateTaskIndex(taskId: number, newIndex: number) {
    const task = await prisma.task.findUnique({ where: { id: taskId } });
    if (!task) throw new Error("Task not found");
  
    const oldIndex = task.index;
  
    if (oldIndex === newIndex) return task;
  
    const maxIndex = await prisma.task.aggregate({ _max: { index: true } });
    const tempIndex = (maxIndex._max.index || 0) + 1;
  
    await prisma.task.update({
      where: { id: taskId },
      data: { index: tempIndex },
    });
  
    if (oldIndex < newIndex) {
      await prisma.task.updateMany({
        where: {
          index: {
            gt: oldIndex,
            lte: newIndex,
          },
        },
        data: { index: { decrement: 1 } },
      });
    } else {
      await prisma.task.updateMany({
        where: {
          index: {
            gte: newIndex,
            lt: oldIndex,
          },
        },
        data: { index: { increment: 1 } },
      });
    }
  
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { index: newIndex },
    });
  
    return updatedTask;
  }
  
  

  async deleteTask(id: number) {
    return await prisma.task.delete({ where: { id } });
  }

  async updateTask(id: number, payload: Partial<TaskPayload>) {
    return await prisma.task.update({
      where: { id },
      data: payload,
    });
  }
}

export default new TaskService();
