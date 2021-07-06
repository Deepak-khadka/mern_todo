import express from "express";
import Todo from "./model.js";
import {userSchema} from "./validation.js";

const router = express.Router();

router.get("/", async (request, response) => {
    const todo = await Todo.find();
    response.send(todo)
});

router.post("/create", async (request, response) => {
    const data = request.body

    const {error} = userSchema.validate(data)
    if (error) return response.status(404).send(error.message);

    const todo = new Todo(data)
    await todo.save()

    response.send(`${data.title} Created Successfully`);
});

router.get('/show/:id', async (request, response) => {
    const id = request.params.id
    const todoData = await Todo.findById({_id: id})
    response.send(todoData)
})

router.put('/update/:id', async (request, response) => {
    const id = request.params.id

    const { error } = userSchema.validate(request.body)
    if (error) return response.send(error)

    const todoData = await Todo.findOneAndUpdate({_id: id}, {$set: request.body}, {new: true})
    response.send(`Update Success ${todoData}`)
})

router.patch("/delete/:id", async (request, response) => {
    const todoId = request.params.id;
    const removedTodo = await Todo.findByIdAndRemove({_id: todoId})
    response.send(`Success to remove ID : ${removedTodo.title}`)
});

export default router;
