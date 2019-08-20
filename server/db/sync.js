const conn = require('./conn');
const { Media } = require('./Models');

const sync = () => {
    return conn.sync({ force: true })
}

// const syncAndSeed = () => {
//     return sync()
//         .then(() => {

//         })
// }

module.exports = {
    sync
};
