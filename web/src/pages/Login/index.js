import React from 'react';
import { Title } from './styled';

import { Container } from '../../styleGlobal';

export default function Login(){
    return (
        <Container>
            <Title>
                Login
                <small>Olá</small>
            </Title>
            <p>Lorem ipsum</p>
            <button type="button">Login</button>
        </Container>
    );
}
