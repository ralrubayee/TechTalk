import { Profile } from '../models/profile.js'

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

const createTodo = async (req, res) => {
  try {
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

const deleteTodo = async (req, res) => {
  try {
    const profile = await Profile.findById(req.user.profile)
    profile.todos.remove({ _id: req.params.todoId })

    await profile.save()
    return res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const updatedProfile = await Profile.findById(req.user.profile)
      .populate('todos.created_by')

    const idx = updatedProfile.todos.findIndex(
      (todo) => todo._id.equals(req.params.todoId)
    )
    updatedProfile.todos[idx].completed = true

    await updatedProfile.save()
    return res.status(200).json(updatedProfile)

  } catch (err) {
    res.status(500).json(err)
  }
}



export { 
  index,
  createTodo as create,
  show,
  update,
  deleteTodo as delete,
}
