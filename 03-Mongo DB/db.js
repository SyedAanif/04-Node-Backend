// https://www.topcoder.com/thrive/articles/how-to-connect-mongodb-to-node-js-using-mongoose
// Mongoose is used to query MongoDB with ease from NodeJS
// It is Object[JS] Document[MongoDB] Modelling(ODM)
// Schema: Data types and blueprint in MongoDB Document collection

const mongoose = require("mongoose");

const connectDB = async (MONGO_DB_SRV) => {
  try {
    const conn = await mongoose.connect(MONGO_DB_SRV, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
