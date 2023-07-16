const Product = require("../models/Product.js");
const router = require("express").Router();

router.get("/get-all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
});

router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Item added successfully.");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.id }, req.body);
    res.status(200).json("Item updated successfully.");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.id });
    res.status(200).json("Item deleted successfully.");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
