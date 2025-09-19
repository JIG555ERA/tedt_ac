import { TODO_API } from "../constants/constant.js";
import axios from "axios";

export const getTodos = async (req, res) => {
  try {
    const { data } = await axios.get(TODO_API);

    return res.status(200).json({
      success: true,
      message: `Data fetched successfully from ${TODO_API}`,
      data,
    });
  } catch (err) {
    console.error("Error fetching todos:", err.message); // ✅ logs in Vercel
    return res.status(500).json({
      success: false,
      message: `Failed to fetch data from ${TODO_API}`,
      error: err.message,
    });
  }
};
