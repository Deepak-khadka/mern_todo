import mongoose from 'mongoose';

const todoSchema  = new mongoose.Schema({
   title : String ,
   description : String,
   status : Number,
})
 
const Todo = mongoose.model('TODO', todoSchema)

export default Todo;