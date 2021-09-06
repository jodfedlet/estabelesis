import React, { useEffect, useState} from 'react';
import { Container } from '../../styleGlobal';
import api from '../../services/api';
import Header from '../../components/Header';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { 
    EstabelecimentoContainer, 
    EstabelecimentoLogo,
    NovoEstabelecimento,
    ButtonAndSearch 
} from './styled.js';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import Loading from '../../components/Loading';

export default function Estabelecimentos(){

    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');

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

    const handleDelete = async(e, id) => {
        e.preventDefault();

        if(!window.confirm('Você tem certeza de que quer remover este registro?')){
            return;
        }

        try{
            const response = await api.delete(`/estabelecimentos/${id}`)
            toast.success(response.data.response); 
            const allEstabelecimentos = [...estabelecimentos]
            setEstabelecimentos(allEstabelecimentos.filter(estabelecimento => estabelecimento.id !== id));

        }catch(err){
            toast.error(err.response.data.errors[0]);  
        }
    }

    const handleSearch = async e => {
        e.preventDefault();

        if(!search){
            toast.error("Favor, digite uma localização")
        }else{
            try{
                setIsLoading(true)
                const response = await api.get(`/estabelecimentos/localization/${search}`);
                setEstabelecimentos(response.data)
                setIsLoading(false)
            }catch(err){
                toast.error(err.response.data.errors[0]);  
            }
        }
    }

    return (
            <Container>

                <Header/>
                <Loading isLoading={isLoading} />
                <h1>Estabelecimentos</h1>
                <ButtonAndSearch>
                    <div>
                        <input
                            value={search}
                            type="text"
                            placeholder="Digite um localização"
                            onChange={e => setSearch(e.target.value)} 
                        />
                        <button type="submit" onClick={handleSearch}>Buscar</button>
                    </div>

                    <NovoEstabelecimento to='/estabelecimento'>Novo</NovoEstabelecimento>
                </ButtonAndSearch>
                
                <EstabelecimentoContainer>
                {estabelecimentos.map(estabelecimento => (
                        <div key={String(estabelecimento.id)}>
                            <span>{estabelecimento.id}</span>
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
                            <Link onClick={(e => handleDelete(e, estabelecimento.id))} to={`/estabelecimento/${estabelecimento.id}`}>
                                <FaWindowClose size={18}/>
                            </Link>
                        </div>
                    ))}
                </EstabelecimentoContainer>
            </Container>
    );
}
