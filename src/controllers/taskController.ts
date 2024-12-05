import { FastifyReply, FastifyRequest } from "fastify";
import TaskService from "../services/taskService";

class TaskController {
  async createTask(req: FastifyRequest, reply: FastifyReply) {
    try {
      const task = await TaskService.createTask(req.body as any);
      reply
        .code(201)
        .send({ message: "Task created successfully", data: task });
    } catch (error: unknown) {
      if (error instanceof Error) {
        reply
          .code(500)
          .send({ message: "Error creating task", error: error.message });
      } else {
        reply.code(500).send({ message: "Unknown error occurred" });
      }
    }
  }

  async listTasks(_: FastifyRequest, reply: FastifyReply) {
    const tasks = await TaskService.listTasks();
    reply.send({ data: tasks });
  }


  async deleteTask(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };
    await TaskService.deleteTask(Number(id));
    reply.code(200).send({ message: "Task deleted successfully" });
  }

  async updateTask(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string };
      const task = await TaskService.updateTask(Number(id), req.body as any);
      reply
        .code(200)
        .send({ message: "Task updated successfully", data: task });
    } catch (error: unknown) {
      if (error instanceof Error) {
        reply
          .code(500)
          .send({ message: "Error updating task", error: error.message });
      } else {
        reply.code(500).send({ message: "Unknown error occurred" });
      }
    }
  }
}

export default new TaskController();
