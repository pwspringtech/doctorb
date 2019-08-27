const router = require('express').Router();
const { User, ContactMessage } = require('../db/Models');

// router.get('/users', (req, res, next) => {
//     ContactMessage.findAll({ include: [ User ] })
//         .then(messages => res.json(messages))
//         .catch(next);
// });

// router.get('/', (req, res, next) => {
//     ContactMessage.findAll()
//         .then(messages => res.json(messages))
//         .catch(next);
// });

module.exports = router;
