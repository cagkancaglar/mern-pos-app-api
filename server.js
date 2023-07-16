const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const invoiceRoute = require("./routes/invoices");
const authRoute = require("./routes/auth");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/invoices", invoiceRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
