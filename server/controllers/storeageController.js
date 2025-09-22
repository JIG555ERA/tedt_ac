import mongoose from "mongoose";

function formatBytes(bytes) {
    if (bytes === 0) return "0 bytes";
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i).toFixed(2)) + " " + sizes[i]);
}

export const getDatabaseStats = async (req, res) => {
  try {
    const client = mongoose.connection.getClient();
    const dbName = mongoose.connection.name;
    const db = client.db(dbName);

    // Database-level stats
    const stats = await db.stats();

    res.json({
      success: true,
      data: {
        database: dbName,
        collections: stats.collections,
        objects: stats.objects,
        dataSize: stats.dataSize,
        indexSize: stats.indexSize,
        storageSize: stats.storageSize, 
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch storage stats",
      error: err.message,
    });
  }
};
