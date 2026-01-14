import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
