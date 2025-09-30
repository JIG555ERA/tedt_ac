import Event from '../models/todoSchema.js'
import redis from '../cacheManager/redisClient.js'

export const createEvent = async ( req, res ) => {
  try {
    let event = await Event.insertOne(req.body)
    // await todo.save();
    return res.status(200).json({
      success: true,
      message: `Event created successfully`,
      data: todo
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to create Event`,
      error: err.message
    })
  }
}

export const getAllEvents = async ( req, res ) => {
  try {

    // fetching from redis if cached
    const cacheKey = "events:all"
    const cached = await redis.get(cacheKey);
    if (cached) {
      // res.setHeader("Cache-Control", "public, max-age=600, s-maxage=200, stale-while-revalidate=3600");
      return res.status(200).json({
        success: true,
        message: `Events fetched successfully from redis cache manager`,
        data: JSON.parse(cached)
      })
    }

    // fetching from db
    let allEvents = await Event.find().lean();
    // res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=600");

    // caching data into redis
    await redis.set(cacheKey, JSON.stringify(allTodos), "EX", 3600);

    return res.status(200).json({
      success: true,
      message: `All Events fetched successfully`,
      data: allEvents
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to fetch all Events`,
      error: err.message
    })
  }
}

export const getEventByName = async ( req, res ) => {
  try {

    const { username } = req.params

    let event = await Event.findOne({ username });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: `todo fetched successfully`,
      data: event
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to fetch todo`,
      error: err.message
    })
  }
}