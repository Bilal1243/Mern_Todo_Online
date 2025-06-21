import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../controllers/todoController.js";

const todoRoute = express.Router();

// http://localhost:3000/api/todo/create-todo
todoRoute.post("/create-todo", createTodo);

todoRoute.get("/getTodos", getTodos);

// http://localhost:3000/api/todo/sayana
// http://localhost:3000/api/todo/franklin
todoRoute.delete("/:id", deleteTodo);

todoRoute.get("/getTodoById", getTodoById);

todoRoute.patch("/update", updateTodo);

export default todoRoute;
