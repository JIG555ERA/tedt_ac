import { TODO_API } from "../constants/constant";
export const getTodos = async (req, res) => {
    try {
        console.log("TODO_API is:", TODO_API); // <--- add this
        const { data } = await axios.get(TODO_API);

        return res.status(200).json({
            success: true,
            message: `Data fetched successfully from ${TODO_API}`,
            data: data
        });
    } catch (err) {
        console.error("Error fetching todos:", err.message);
        return res.status(500).json({
            success: false,
            message: `Failed to fetch data from ${TODO_API}`,
            error: err.message
        });
    }
};
