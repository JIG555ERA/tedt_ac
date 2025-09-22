// redisClient.js
import Redis from "ioredis";

// Connect to Upstash Redis (use your actual URL here or ENV variable)
const redis = new Redis(process.env.REDIS_URL, {
  tls: {}, // Required for Upstash (uses TLS)
});

redis.on("connect", () => console.log("✅ Connected to Redis (Upstash)"));
redis.on("error", (err) => console.error("❌ Redis error:", err));

export default redis;
