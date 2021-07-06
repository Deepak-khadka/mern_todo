import mongoose from 'mongoose';

const todoSchema  = new mongoose.Schema({
   title : {
      type : String,
      required : true,
      minlength : 3,
      maxlength : 25
   } ,
   description : {
      type : String,
      maxlength : 255,
   },
   status : {
      type: Number,
      required : true
   },
});
 
const todo = mongoose.model('Todo', todoSchema)

export default todo;