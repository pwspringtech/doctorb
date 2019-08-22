const nodemailer = require('nodemailer');

const emailContactMessage = (messageObj) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'william@alabconsulting.com',
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.CLIENT_REFRESH_TOKEN
        }
    });

    const mailResponse = transporter.sendMail({
        from: 'william@alabconsulting.com',
        to: 'preston.chaplin@gmail.com, w.griffin13@gmail.com',
        subject: messageObj.subject,
        html: messageObj.html
    });
    return mailResponse

}

module.exports = { emailContactMessage };
