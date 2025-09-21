import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    }
})

const Todo = mongoose.model("todo", todoSchema);

export default Todo;