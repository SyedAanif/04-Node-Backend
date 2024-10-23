const express = require("express");
const router = express.Router();

// middlewares
const auth = (req, res, next) => {
  console.log(`Auth middleware`);

  // add a dummy user to request
  req.user = { userId: 1, role: "student" };

  if (req.user) {
    // valid user exists
    next(); // chain to next middleware
  } else {
    // not a valid user
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};

const isStudent = (req, res, next) => {
  console.log(`Student check middleware`);

  if (req.user.role === "student") {
    // valid student role user exists
    next(); // chain to next middleware
  } else {
    // not a valid user
    res.json({
      success: false,
      message: "Not a student user",
    });
  }
};

const isAdmin = (req, res, next) => {
  console.log(`Admin check middleware`);

  if (req.user.role === "admin") {
    // valid admin role user exists
    next(); // chain to next middleware
  } else {
    // not a valid user
    res.json({
      success: false,
      message: "Not an admin user",
    });
  }
};

// routes
// Route Specific Middleware
// chain the middlewares in the route
router.get("/student", auth, isStudent, (req, res) => {
  console.log(`Student Handler`);
  res.send("Student Controller");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log(`Admin Handler`);
  res.send("Admin Controller");
});

module.exports = router;
