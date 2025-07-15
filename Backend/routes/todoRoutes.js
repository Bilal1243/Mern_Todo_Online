import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../controllers/todoController.js";
import {protect} from '../middlewares/authMiddleware.js'

const todoRoute = express.Router();

// http://localhost:3000/api/todo/create-todo
todoRoute.post("/create-todo",protect , createTodo);

todoRoute.get("/getTodos",protect, getTodos);

// http://localhost:3000/api/todo/sayana
// http://localhost:3000/api/todo/franklin
todoRoute.delete("/:id",protect, deleteTodo);

todoRoute.get("/getTodoById",protect, getTodoById);

todoRoute.patch("/update",protect, updateTodo);

export default todoRoute;
