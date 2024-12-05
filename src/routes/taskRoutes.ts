import { FastifyInstance } from "fastify";
import TaskController from "../controllers/taskController";

async function taskRoutes(fastify: FastifyInstance) {
  // fastify.register(require("@fastify-session"), {
  //   secret: "a string which is longer than 32 characters",
  //   cookie: { secure: false }, // Define como true em produção
  // });
  
  // fastify.register(require("@fastify/csrf-protection"), {
  //   sessionPlugin: "@fastify/session", // Liga o CSRF à sessão
  // });

  // fastify.get("/", async (req, reply) => {
  //   const token = reply.generateCsrf(); // Gera o token CSRF
  //   return { token };
  // });

  fastify.post("/tasks", TaskController.createTask);
  fastify.get("/tasks", TaskController.listTasks);
  //fastify.put("/tasks/:id/index", TaskController.updateTaskIndex);
  fastify.put("/tasks/:id", TaskController.updateTask);
  fastify.delete("/tasks/:id", TaskController.deleteTask);
}

export default taskRoutes;
