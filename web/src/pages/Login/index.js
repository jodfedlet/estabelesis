import React from 'react';
import { Title } from './styled';

import { useDispatch } from 'react-redux';

import { Container } from '../../styleGlobal';
import * as actions from '../../store/modules/actions';

export default function Login(){

    const dispatcher = useDispatch();

    function handleLogin(e){
        e.preventDefault();

        dispatcher(actions.buttonClickRequest());
    }
    return (
        <Container>
            <Title>
                Login
                <small>Olá</small>
            </Title>
            <p>Lorem ipsum</p>
            <button type="button" onClick={handleLogin}>Login</button>
        </Container>
    );
}
