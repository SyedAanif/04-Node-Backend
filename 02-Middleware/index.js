const express = require("express");
const route = require("./routes/route")

const app = express();

const PORT = 3000;

// JSON parsing middleware
app.use(express.json());

// Text parsing middleware
app.use(express.text());

// building own middleware flow, before the actual route handler
// Application Level Middleware
// we can build similar on Router Level
// const router = express.Router()
// router.use(express.json())
// Request --> Logging --> Authentication --> Validation --> Response
// Logging middleware
const loggingMiddleware = (req, res, next) => {
  console.log(`Log incoming request`);

  next(); // chain the next middleware
};

const isLoggedIn = true;
// Authentication middleware
const authMiddleware = (req, res, next) => {
  console.log(`Authenticate request`);

  if (!isLoggedIn) {
    // return the response from here
    res.send("Not logged in");
  } else {
    next(); // chain the next middleware
  }
  // this code is executed even after return
  console.log(`After Authenticate request`);
};

// Validation middleware
const validMiddleware = (req, res, next) => {
  console.log(`Validate request`);

  next(); // chain the next middleware or route handler
};

// app.use(loggingMiddleware, authMiddleware, validMiddleware);

app.get("/", (req, res) => {
  console.log(`Route Handler`);
  res.send("Middlewares");
});

app.use("/api", route)

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
