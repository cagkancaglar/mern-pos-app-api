const User = require("../models/User.js");
const router = require("express").Router();


router.get("/", async(req, res) => {
  const userId = req.body.id;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err)
  }
});


module.exports = router;
