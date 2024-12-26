import mongoose from "mongoose";
export async function dbConnect() {
  try {
    // Connect to your MongoDB database here
    const con = await mongoose.connect(process.env.MONGO_URL);
    return con;
  } catch (error) {
    console.log(error);
  }
}
