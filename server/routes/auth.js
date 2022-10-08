const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('auth route');
});

module.exports = router;