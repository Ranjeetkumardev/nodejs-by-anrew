import express, { Router } from "express";
import Task from "./Model/task.js";
const router = express.Router();
 
router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router