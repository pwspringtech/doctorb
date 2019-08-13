const router = require('express').Router();
const { User, ContactMessage } = require('../db/Models');

router.get('/messages', (req, res, next) => {
    User.findAll({ include: [ ContactMessage ] })
        .then(users => res.json(users))
        .catch(next);
});

router.get('/', (req, res, next) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(next);
});

module.exports = router;
