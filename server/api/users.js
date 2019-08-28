const router = require('express').Router();
const { User, ContactMessage } = require('../db/Models');
const { emailContactMessage } = require('./emailContactMessage');

const formatUserMessageForEmail = ( requestBody ) => {
    const simpleMessage = `Automated message from App Age Technologies\n\ntoddberland.com - Contact Form Response\n\nFirst Name`;
    const htmlMessage = `
    <html>
    <body>
    <p><span style="color: #808080;">Automated message from App Age Technologies</span></p>
    <p><strong><span>toddberland.com - Contact Form Response:</span></strong><br>
    <span>First Name: ${requestBody.firstName}</span><br>
    <span">Last Name: ${requestBody.lastName}</span><br>
    <span>Phone: ${requestBody.phone}</span><br>
    <span>Email: ${requestBody.email}</span></p>
    <p><span>Message: ${requestBody.message}</span></p>
    </div>
    </body>
    </html>
    `;
    return {html: htmlMessage, simpleText: simpleMessage, subject: 'toddberland.com - Contact Form Response'}
};

router.post('/messages', (req, res, next) => {
    const { email, firstName, lastName, phone, message } = req.body;
    User.findOrCreate({where: {email: req.body.email}, defaults: {email, firstName, lastName, phone}})
        .then(([user, created]) => {
            ContactMessage.create({userId: user.id, message})
                .then(finalMessage => {
                    emailContactMessage(formatUserMessageForEmail(req.body))
                    res.status(201).json(finalMessage)
                })
                .catch(next);
        })
        .catch(next);
})

// router.get('/messages', (req, res, next) => {
//     User.findAll({ include: [ ContactMessage ] })
//         .then(users => res.json(users))
//         .catch(next);
// });

// router.get('/', (req, res, next) => {
//     User.findAll()
//         .then(users => res.json(users))
//         .catch(next);
// });

module.exports = router;
