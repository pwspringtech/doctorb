const User = require('./User');
const ContactMessage = require('./ContactMessage');
const Media = require('./Media')

User.hasMany(ContactMessage);
ContactMessage.belongsTo(User);

module.exports = {
    User,
    ContactMessage,
    Media
};
