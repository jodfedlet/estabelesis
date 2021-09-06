import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EstabelecimentoContainer = styled.div`
    margin-top: 20px;

    div {
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
    }

    div + div {
        border-top: 1px solid #eee;
    }
`;

export const EstabelecimentoLogo = styled.div`
   img{
       width: 36px;
       height: 36px;
       border-radius: 50px;
   }
`;


export const NovoEstabelecimento = styled(Link)`
   display: block;
   padding:20px 0 10px;
`;


export const ButtonAndSearch = styled.div`
   display: flex;
   align-items: center;
   justify-content:space-between;

   input {
        margin-bottom: 20px;
        height: 35px;
        padding: 0 10px;
        border-radius: 4px;
    }
`;

