import mongoose from "mongoose";
import { MONGODB_URI, MONGODB_OPTIONS } from "./mongodb.config.js";

export default async function connectDB() {
  const mongoUri = MONGODB_URI;
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri, MONGODB_OPTIONS);
}