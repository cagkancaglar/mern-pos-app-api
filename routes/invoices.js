const Invoice = require("../models/Invoice.js");
const router = require("express").Router();

router.get("/get-all", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (err) {
    console.log(err);
  }
});

router.post("/add-invoice", async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(200).json("Item added successfully.");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
