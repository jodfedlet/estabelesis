import React, { useEffect, useState} from 'react';
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
import { useSelector } from 'react-redux';


export default function Estabelecimentos(){

    const token = useSelector(state => state.authReducer.token);

    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function getEstabelecimentos(){
            try{
                setIsLoading(true)
                const response = await api.get('/estabelecimentos', {
                    headers: {"Authorization" : `Bearer ${token}`}
                });
                setEstabelecimentos(response.data)
                setIsLoading(false)
            }catch(err){
                setIsLoading(false)
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
            setIsLoading(true);
            const response = await api.delete(`/estabelecimentos/${id}`,{
                headers: {"Authorization" : `Bearer ${token}`}
            })
            toast.success(response.data.response); 
            const allEstabelecimentos = [...estabelecimentos]
            setEstabelecimentos(allEstabelecimentos.filter(estabelecimento => estabelecimento.id !== id));
            setIsLoading(false)
        }catch(err){
            setIsLoading(false)
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
                const response = await api.get(`/estabelecimentos/localization/${search}`,{
                    headers: {"Authorization" : `Bearer ${token}`}
                });
                setEstabelecimentos(response.data)
                setIsLoading(false)
            }catch(err){
                toast.error(err.response.data.errors[0]);  
            }
        }
    }

    return (
            <>
                <Header/>
                <Loading isLoading={isLoading} />
                <br></br>
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
                <table>
                    <caption> <h1>Estabelecimentos</h1></caption>
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Diretor</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Localização</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                    {estabelecimentos.map(estabelecimento => (
                         <tr key={String(estabelecimento.id)}>
                         <td data-label="ID">{estabelecimento.id}</td>
                         <td data-label="Logo">
                             <EstabelecimentoLogo>
                                {get(estabelecimento,'logo', false) ? (
                                    <img src={estabelecimento.logo} alt=''/>
                                ) : (
                                    <FaUserCircle size={30}/>
                                )}
                             </EstabelecimentoLogo>
                         </td>
                         <td data-label="Nome">{estabelecimento.name}</td>
                         <td data-label="Email">{estabelecimento.email}</td>
                         <td data-label="Diretor">{estabelecimento.director}</td>
                         <td data-label="Telefone">{estabelecimento.phone}</td>
                         <td data-label="Localização">{estabelecimento.localization}</td>
                         <td data-label="Ações">
                            <Link to={`/estabelecimento/${estabelecimento.id}`}>
                                    <FaEdit size={18}/>
                             </Link>
                            <Link onClick={(e => handleDelete(e, estabelecimento.id))} to={`/estabelecimento/${estabelecimento.id}`}>
                                <FaWindowClose size={18}/>
                            </Link>
                         </td>
                         </tr>
                    ))}
                    </tbody>
                    </table>
                
                </EstabelecimentoContainer>
            </>
    );
}
