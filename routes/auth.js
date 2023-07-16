const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(404).json({ error: "Username or password is incorrect" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(401).json({ error: "Username or password is incorrect" });
    } else {
      res.status(200).json(user);
    }

    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
