const ProductModel = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    if (!products || products.length === 0) {
      res.status(400).json({
        message: "Inventory is empty!!!",
      });
    }
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

// CREATE product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const newProduct = new ProductModel({ name, price, description, category });
    await newProduct.save();

    res.status(200).json({ message: "Product created" });
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

// UPDATE product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    await ProductModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
      },
      {
        new: true, // get updated record
      }
    );

    res.status(200).json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

// DELETE product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(400).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
