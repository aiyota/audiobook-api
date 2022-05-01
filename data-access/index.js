import config from "../config/config.js";
import mongoose from "mongoose";

export default async function connectToDb() {
  const conn = await mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
}
