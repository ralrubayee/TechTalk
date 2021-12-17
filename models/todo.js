import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
todo_text: {
  type: String,
  required: true
}, 
completed: {
  type: Boolean,
  default: false,
},
created_by:{ 
  type: mongoose.Schema.Types.ObjectId, 
  ref: 'Profile',
},
  })

const Todo = mongoose.model('Todo', todoSchema)

export {Todo}