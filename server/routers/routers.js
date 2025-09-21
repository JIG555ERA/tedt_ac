// server/routers/routers.js
import express from "express";
import { createTodo, getAllTodos, getTodoByName } from "../controllers/controller.js";

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodoByName/:username", getTodoByName);
router.get("/getAllTodos", getAllTodos);

export default router;
