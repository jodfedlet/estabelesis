import React, { useEffect, useState} from 'react';
import { Container } from '../../styleGlobal';
import api from '../../services/api';
import Header from '../../components/Header';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { EstabelecimentoContainer, EstabelecimentoLogo } from './styled.js';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import Loading from '../../components/Loading';

export default function Estabelecimentos(){

    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function getEstabelecimentos(){
            try{
                setIsLoading(true)
                const response = await api.get('/estabelecimentos');
                setEstabelecimentos(response.data)
                setIsLoading(false)
            }catch(err){
                toast.error(err.response.data.errors[0]);  
            }
        }

        getEstabelecimentos();
    },[]);

    return (
        <>
            <Container>

            <Header/>
            <Loading isLoading={isLoading} />
                <h1>Estabelecimentos</h1>
                <EstabelecimentoContainer>
                {estabelecimentos.map(estabelecimento => (
                        <div key={String(estabelecimento.id)}>
                            <EstabelecimentoLogo>
                                {get(estabelecimento,'logoo', false) ? (
                                    <img src={estabelecimento.logo} alt=''/>
                                ) : (
                                    <FaUserCircle size={30}/>
                                )}
                            </EstabelecimentoLogo>

                            <span>{estabelecimento.name}</span>
                            <span>{estabelecimento.email}</span>
                            <span>{estabelecimento.director}</span>
                            <span>{estabelecimento.phone}</span>
                            <span>{estabelecimento.localization}</span>

                            
                        
                            <Link to={`/estabelecimento/${estabelecimento.id}`}>
                                <FaEdit size={18}/>
                            </Link>
                            <Link to={`/estabelecimento/${estabelecimento.id}`}>
                                <FaWindowClose size={18}/>
                            </Link>
                        </div>
                    ))}
                </EstabelecimentoContainer>
            </Container>
        </>
    );
}
