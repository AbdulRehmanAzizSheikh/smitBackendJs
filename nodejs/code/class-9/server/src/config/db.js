import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
