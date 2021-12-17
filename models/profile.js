import mongoose from 'mongoose'

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
  todo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo' 
    }
  ]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
