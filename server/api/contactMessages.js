const router = require('express').Router();
const { User, ContactMessage } = require('../db/Models');

router.post('/', (req, res, next) => {
    ContactMessage.create(req.body)
        .then(message => {
            res.status(201).json(message)
        })
        .catch(next);
})

router.get('/users', (req, res, next) => {
    User.findAll({ include: [ User ] })
        .then(messages => res.json(messages))
        .catch(next);
});

router.get('/', (req, res, next) => {
    User.findAll()
        .then(messages => res.json(messages))
        .catch(next);
});

module.exports = router;
