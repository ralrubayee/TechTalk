import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
text: {
  type: String,
  required: true,
},
added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
},{
    timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export {Post}