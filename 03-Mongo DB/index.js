const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const router = require("./routes/users");

// Load .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_DB_SRV = process.env.MONGO_DB_URI

// body parser
app.use(express.json());

// 1. connect to MongoDB
connectDB(MONGO_DB_SRV);
// 2. Create Schema to build Model
// 3. Perform CRUD operations

app.use("/", router)

app.listen(PORT, () => {
  console.log(`Server Started on port: ${PORT}`);
});
