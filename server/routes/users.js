const router = require('express').Router();
const User = require('../models/User');

// router.get('/', async (req, res) => {
//   return res.status(200).json('users route')
// });

router.get('/', async (req, res) => {
  const { userId, username } = req.query;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });

    const { password, updatedAt, ...publicData } = user._doc;
    return res.status(200).json(publicData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;