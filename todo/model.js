import mongoose from 'mongoose';

const todoSchema  = new mongoose.Schema({
   title : String ,
   description : String,
   status : Number,
});
 
const todo = mongoose.model('Todo', todoSchema)

export default todo;