import express from "express";
import Todo from "./model.js";

const router = express.Router();

/* Display all the list of todos */
router.get("/", async (req, res) => {
  const todo = await Todo.find();
  res.send(todo)
});

/* Create todos list*/
router.post("/create", async (req, res) => {
  const data = req.body;
  const todo = Todo(data);
  todo.save();
  res.send(`${data.title} Created Successfully`);
});

router.patch("/delete",  async (req, res) => {
 const todoId = req.body.id;
 Todo.remove({"_id" : ObjectId("4d5192665777000000005490")});
  res.send(`Success to remove ID : ${todoId}`)
});

export default router;
