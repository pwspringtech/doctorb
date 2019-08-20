const router = require('express').Router();
const { User, ContactMessage } = require('../db/Models');

router.post('/messages', (req, res, next) => {
    const { email, firstName, lastName, phone, message } = req.body;
    User.findOrCreate({where: {email: req.body.email}, defaults: {email, firstName, lastName, phone}})
        .then(([user, created]) => {
            console.log(user.id)
            ContactMessage.create({userId: user.id, message})
                .then(message => {
                    res.status(201).json(message)
                })
                .catch(next);
        })
        .catch(next);
})

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
