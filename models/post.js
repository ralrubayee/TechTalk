import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  comment_text: {
    type: String,
    required: true,
  },
  commenter: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Profile',
  },
  },{
      timestamps: true,
  })

const postSchema = new mongoose.Schema({
text: {
  type: String,
  required: true,
},
added_by: { 
  type: mongoose.Schema.Types.ObjectId, 
  ref: 'Profile',
},
comments:[commentSchema],
},{
    timestamps: true,
})


const Post = mongoose.model('Post', postSchema)

export {Post}