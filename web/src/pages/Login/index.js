import React, { useState } from 'react';
import { Title, Form } from './styled';

import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styleGlobal';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props){

    const dispatcher = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/')

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const  handleSubmit = (e) =>{
        e.preventDefault();

        if(!email || !password){
            toast.error('Email e senha são obrigatórios')
        }else if(!isEmail(email)){
            toast.error('Email inválido')
        }else{
            dispatcher(actions.loginRequest({email, password, prevPath}))
        }
    }
    return (
        <Container>
            <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email}
                    required={true}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Digite o email de acesso"   
                />
                 <input 
                    type="text" 
                    value={password}
                    required={true}
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Digite a sua senha"   
                />
                <button type="submit" >Conectar</button>
            </Form>
            </div>
        </Container>
    );
}
