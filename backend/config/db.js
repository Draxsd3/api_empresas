import mongoose from "mongoose";

export default async function connectDB() {
  const mongoUri = process.env.MONGODB_URI || "mongodb+srv://renanpicoramos2004_db_user:ey9H8uHR3GDjngIR@cluster0.mgqgxaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(mongoUri);
}