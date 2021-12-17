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


// const create = async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id)
//     req.body.created_by = req.user.profile
//         profile.todos.push(req.body)


//   }
// }

// const createTodo = async (req, res) => {
//   try {
//     req.body.created_by = req.user.profile
//     const profile = await Profile.findById(req.params.id)
//     profile.todos.push(req.body.todo_text)
//     await profile.save()
//     const newTodo = profile.todos[profile.todos.length - 1]
//       newTodo.created_by = profile

//     return res.status(201).json(newTodo)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// }

const createTodo = async (req, res) => {
  try {
    console.log('workkkkk',req.user.profile)
    req.body.created_by = req.user.profile
    const profile = await Profile.findById(req.user.profile)
    profile.todos.push(req.body)
    await profile.save()
    const newtodo = profile.todos[profile.todos.length - 1]

    return res.status(201).json(newtodo)
  } catch (err) {
    res.status(500).json(err)
  }
}






export { 
  index,
  // create,
  createTodo as create,
  show,
}
