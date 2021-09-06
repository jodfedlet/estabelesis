let supertest = require('supertest');
const dotenv = require('dotenv');
const PORTA = 3333;
let request = supertest('http://localhost:3333')

describe('Autenticação', () => {
    test('Deve efetuar login', () => {

        const user = {
            email:'johndoe@gmail.com',
            password:'estabelesis',
        }
        return request.post('/auth/login')
        .send(user)
        .then(res => {
            expect(res.statusCode).toEqual(200)
            expect(res.body.token).toBeDefined()
        }).catch(err => {
            console.log(err)
        })
    }) 
});