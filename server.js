const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
