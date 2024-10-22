import express from "express";
const router = express.Router(); // create router

// GET
router.get("/items", (req, res) => {
  //   res.send("GET Request");
  //   res.sendFile("./res.html", {
  //     root: __dirname,
  //   });
  res.json({
    x: 1,
    y: 2,
    z: 3,
  });
});

// POST
router.post("/items", (req, res) => {
  res.send("POST Request");
});

// PUT
router.put("/items/:id", (req, res) => {
  res.send("PUT Request");
});

// DELETE
router.post("/items/:id", (req, res) => {
  res.send("DELETE Request");
});

export default router