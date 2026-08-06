import mongoose from "mongoose";

const MONGODB = process.env.MONGODB_URI;

if (!MONGODB) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

// Global cache to prevent multiple connections 
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // If already connected, return existing connection
  if (cached.conn?.readyState === 1) {
    return cached.conn;
  }

  // Create new connection if none exists
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB, {
      bufferCommands: false,        
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }

  return cached.conn;
}

export default connectDB;