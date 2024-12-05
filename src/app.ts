import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import taskRoutes from "./routes/taskRoutes";

const app = Fastify();

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

app.register(taskRoutes);

export default app;
