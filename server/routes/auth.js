const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const {username, email, password} = req.body;
  
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save()
    res.status(200).json(user);
  } catch(err) {
    console.error(err);
    res.sendStatus(401).end();
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) res.status(404).json("user not found");

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) res.status(400).json("invalid password");

    res.status(200).json(user);
  } catch(err) {
    console.error(err);
  }
});
module.exports = router;