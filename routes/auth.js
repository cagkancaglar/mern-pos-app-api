const User = require("../models/User.js");
const router = require("express").Router();

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("A new user created successfully.");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
