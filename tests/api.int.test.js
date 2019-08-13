const axios = require('axios');

const PORT = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

describe('API', function() {
// Tests of API routing

    describe('User model functionality', function() {

        test('users get should return an object', function() {
            return axios.get(`http://${host}:${PORT}/api/users`)
                .then(response => response.data)
                .then(data => {
                    const responseType = typeof data;
                    expect(responseType).toEqual('object');
                })
                .catch(error => {
                    console.error(error.stack)
                    expect(error).toBeNull();
                });
        });

        test('users/messages get should return an object', function() {
            return axios.get(`http://${host}:${PORT}/api/users/messages`)
                .then(response => response.data)
                .then(data => {
                    const responseType = typeof data;
                    expect(responseType).toEqual('object');
                })
                .catch(error => {
                    console.error(error.stack)
                    expect(error).toBeNull();
                });
        });
    });

    describe('Contact Messages model functionality', function() {
        test('contactmessages get should return an object', function() {
            return axios.get(`http://${host}:${PORT}/api/contactmessages`)
                .then(response => response.data)
                .then(data => {
                    const responseType = typeof data;
                    expect(responseType).toEqual('object');
                })
                .catch(error => {
                    console.error(error.stack)
                    expect(error).toBeNull();
                });
        });

        const goodMessage = {
            message: 'this is a test message',
            user: {
                firstName: 'John',
                lastName: 'Smith',
                email: 'johnsmith@email.com',
                phone: '555-0543-9211'
            },

        };

        test('post should return a 201', function() {
            return axios.post(`http://${host}:${PORT}/api/contactmessages`, goodMessage)
                .then(response => response.status)
                .then(status => {
                    expect(status).toEqual(201);
                })
                .catch(error => {
                    console.error(error.stack)
                    expect(error).toBeNull();
                });
        });

    });
});
