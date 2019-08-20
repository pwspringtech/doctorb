const conn = require('../conn');
const Sequelize = require('sequelize');

const Media = conn.define('media', {
    fileName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fileType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fileBLOB: {
        type: Sequelize.BLOB,
        allowNull: false
    }
});

module.exports = Media;
