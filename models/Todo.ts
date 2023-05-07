import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    todo: String,
    done: Boolean,
    created_at: { type: Date, default: Date.now }
})

const Task = mongoose.model('TodoList',TodoSchema)

export default Task