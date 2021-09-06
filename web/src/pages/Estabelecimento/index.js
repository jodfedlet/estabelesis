import React from 'react';
import { Title } from './styled';

import { Container } from '../../styleGlobal';

export default function Estabelecimento(){
    function handleLogin(e){
        e.preventDefault();

    }
    return (
        <Container>
            <h1>Estabelecimento</h1>
            <button type="button" onClick={handleLogin}>Login</button>
        </Container>
    );
}
