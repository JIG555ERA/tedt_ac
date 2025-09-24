import Todo from '../models/todoSchema.js'
import redis from '../cacheManager/redisClient.js'

export const createTodo = async ( req, res ) => {
  try {
    let todo = await Todo.insertOne(req.body)
    // await todo.save();
    return res.status(200).json({
      success: true,
      message: `Todo created successfully`,
      data: todo
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to create todo`,
      error: err.message
    })
  }
}

export const getAllTodos = async ( req, res ) => {
  try {

    // fetching from redis if cached
    const cacheKey = "allTodos"
    const cached = await redis.get(cacheKey);
    if (cached) {
      res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=600");
      return res.status(200).json({
        success: true,
        message: `Data fetched successfully from redis cache manager`,
        data: JSON.parse(cached)
      })
    }

    // fetching from db
    let allTodos = await Todo.find().lean();
    res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=600");

    // caching data into redis
    await redis.set(cacheKey, JSON.stringify(allTodos), "EX", 3600);

    return res.status(200).json({
      success: true,
      message: `All todos fetched successfully`,
      data: allTodos
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to fetch all todos`,
      error: err.message
    })
  }
}

export const getTodoByName = async ( req, res ) => {
  try {

    const { username } = req.params

    let todo = await Todo.findOne({ username });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: `todo fetched successfully`,
      data: todo
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to fetch todo`,
      error: err.message
    })
  }
}