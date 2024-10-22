import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import router from "./routes/item.js";

const app = express();

const PORT = 3000;

// can be organised using routes
app.use("/api", router) // middleware to handle item api
// /api prefix to all endpoints

// // GET
// app.get("/items", (req, res) => {
//   //   res.send("GET Request");
//   //   res.sendFile("./res.html", {
//   //     root: __dirname,
//   //   });
//   res.json({
//     x: 1,
//     y: 2,
//     z: 3,
//   });
// });

// // POST
// app.post("/items", (req, res) => {
//   res.send("POST Request");
// });

// // PUT
// app.put("/items/:id", (req, res) => {
//   res.send("PUT Request");
// });

// // DELETE
// app.post("/items/:id", (req, res) => {
//   res.send("DELETE Request");
// });

app.listen(PORT, () => {
  console.log(`Server Started on port: ${PORT}`);
});
