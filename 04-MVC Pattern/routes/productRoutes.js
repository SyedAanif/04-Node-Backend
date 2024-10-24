const express = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/products", getProducts);

productRouter.post("/products", createProduct);

productRouter.put("/products/:id", updateProduct);

productRouter.delete("/products/:id", deleteProduct);

module.exports = productRouter;
