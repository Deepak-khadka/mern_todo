import express from "express";
import Todo from "./model.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const data = req.body
  const todo = Todo(data)
  todo.save()
  res.send(`${data.title} Created Successfully`)
});

router.get("/", (req, res) => {
  res.send("Inside todo route");
});

export default router;
