const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/contactmessages', require('./contactMessages'));

module.exports = router;
