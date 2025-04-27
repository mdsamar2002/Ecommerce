const mongoose = require('mongoose')



const connectDB = async () => {
  try {
    const dbURL = process.env.MONGO_URI;
    await mongoose.connect(dbURL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;