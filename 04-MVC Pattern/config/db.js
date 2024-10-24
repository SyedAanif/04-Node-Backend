const mongoose = require("mongoose");

const connectDB = async (MONGO_DB_URI) => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
