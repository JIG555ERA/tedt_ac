// import { TODO_API } from '../constants/constant.js'
import axios from 'axios'

export const getTodos = async (req, res) => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
        return res.status(200).json({
            success: true,
            message: `Data fetched successfully from ${`https://jsonplaceholder.typicode.com/todos/`}`,
            data: data
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Failed to fetch data from ${`https://jsonplaceholder.typicode.com/todos/`}`,
            error: err.message
        })
    }
}