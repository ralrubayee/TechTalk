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
  

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  avatar: {
    type: String,
    required: true
  },
  github: {
    type: String,
    default: null
  },
  linkedin: {
    type: String,
    default: null
  },
  bio: {
    type: String,
    default: null
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  todos: [
    todoSchema
  ]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
