import { Profile } from '../models/profile.js'
import {Todo} from '../models/todo.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const show = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    return res.status(200).json(profile)
  } catch (err) {
    return res.status(500).json(err)
  }
}


const create = async (req, res) => {
  try {
    req.body.added_by = req.user.profile
    const todo = await new Todo(req.body)
    await todo.save()
    await Profile.updateOne(
      { _id: req.user.profile },
      { $push: { todos: todo } }
    )
    return res.status(201).json(todo)
  } catch (err) {
    return res.status(500).json(err)
  }
}


export { 
  index,
  create,
  show
}
