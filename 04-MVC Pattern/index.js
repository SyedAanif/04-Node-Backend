const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRoutes");

// Load Config
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// connect to MongoDB
connectDB(process.env.MONGO_DB_URI);

app.use(express.json());
app.use("/", productRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
