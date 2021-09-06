let supertest = require('supertest');
const dotenv = require('dotenv');
const PORTA = 3333;
let request = supertest('http://localhost:3333')

test(`A aplicação deve responder na porta ${PORTA}`, () => {
    return request.get('/')
    .then(res => {
        expect(res.statusCode).toEqual(200)
    });
})