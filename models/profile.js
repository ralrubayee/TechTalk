import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  name: String,
  publication_date:	String,
  location:	String,
  level: String,
  url: String,
  company: String,
})

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
    required: false
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
  ],
  jobs: [jobSchema],
  friends: []
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
