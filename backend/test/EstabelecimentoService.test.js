let supertest = require('supertest');
const dotenv = require('dotenv');
const PORTA = 3333;
let request = supertest('http://localhost:3333')


describe('Recusar Cadastro de estabelecimento', () => {
    test('Deve impedir o cadastro de estabelecimento', () => {

        const estabelecimento = {
            name:'Estabelecimento X',
            email:'Estabelecimento X',
            logo:'etabelecimento.png',
            phone:'Estabelecimento X',
            localization:'Anywhere'
        }
        return request.post('/estabelecimentos')
        .send(estabelecimento)
        .then(res => {
            expect(res.statusCode).toEqual(401)
        }).catch(err => {
            console.log(err)
        })
    }) 
});



describe('Recusar edição de estabelecimento x', () => {
    test('Deve impedir a edição o estabelecimento x', () => {

        const estabelecimento = {
            name:'Estabelecimento X',
            email:'Estabelecimento X',
            logo:'etabelecimento.png',
            phone:'Estabelecimento X',
            localization:'Anywhere'
        }
        return request.put('/estabelecimentos/'+1)
        .send(estabelecimento)
        .then(res => {
            expect(res.statusCode).toEqual(401)
        }).catch(err => {
            console.log(err)
        })
    }) 
});


describe('Impedir remoção do estabelecimento x', () => {
    test('Deve impedir remover o estabelecimento x', () => {

        return request.delete('/estabelecimentos/'+1)
        .then(res => {
            expect(res.statusCode).toEqual(401)
        }).catch(err => {
            console.log(err)
        })
    }) 
});
