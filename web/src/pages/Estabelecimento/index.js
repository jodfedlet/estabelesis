import React, { useState, useEffect } from 'react';
import { Form } from './styled';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import Loading from '../../components/Loading';

import { Container } from '../../styleGlobal';

export default function Estabelecimento({ match }){

    const id = get(match, 'params.id', 0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [director, setDirector] = useState('');
    const [phone, setPhone] = useState('');
    const [localization, setLocalization] = useState('');
    const [logo, setLogo] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    

    
    useEffect(() => {
        if(!id) return;
        async function getEstabelecimento(){
            try{
                setIsLoading(true)
                const { data } = await api.get(`/estabelecimentos/${id}`);
                setName(data.name)
                setEmail(data.email)
                setDirector(data.director)
                setPhone(data.phone)
                setLocalization(data.localization)
                setIsLoading(false)
            }catch(err){
                setIsLoading(false)
                toast.error(err.response.data.errors[0]);  
            }
        }

        getEstabelecimento();
    },[id]);


    const handleSubmit =  async e => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append('logo', logo);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('director', director);
        formData.append('localization',localization);
        formData.append('phone',phone);
       
        try{
            setIsLoading(true)
            const headers = {
                'Content-Type': 'multipart/form-data'
            }
            if(id){
                const { data } = await api.put(`/estabelecimentos/${id}`,formData, headers)
                toast.success(data.response)
            }else{
                const { data } = await api.post(`/estabelecimentos`,formData, headers)
                toast.success(data.response)
            }
            setIsLoading(false)
            history.push('/estabelecimentos')
        }catch(err){
            setIsLoading(false)
            toast.error(err.response.data.errors[0]); 
        }
    }

    const handleChange = e =>{
        setLogo(e.target.files[0])
    }

    return (
        <Container>
            <Loading isLoading={isLoading}/>
            <h1>{id? 'Editar estabelecimento' :  'Novo estabelecimento'}</h1>
            <Form onSubmit={handleSubmit}>
            <input 
                type="text" 
                    value={name}
                    required={true}
                    onChange={e => setName(e.target.value)} 
                    placeholder="Digite o nome do estabelecimento"   
                />
                 <input 
                    type="email" 
                    value={email}
                    required={true}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Digite o email"   
                />
                    <input 
                    type="file" 
                    required={true}
                    onChange={handleChange} 
                    placeholder="Escolhe um arquivo"   
                />
                  <input 
                    type="text" 
                    value={director}
                    required={true}
                    onChange={e => setDirector(e.target.value)} 
                    placeholder="Digite o nome do diretor"   
                />
                 <input 
                    type="text" 
                    value={phone}
                    required={true}
                    onChange={e => setPhone(e.target.value)} 
                    placeholder="Digite o telefone"   
                />
                  <input 
                    type="text" 
                    value={localization}
                    required={true}
                    onChange={e => setLocalization(e.target.value)} 
                    placeholder="Digite a localizacao"   
                />
                <button type="submit">{id? 'Atualizar': 'Salvar'}</button>
            </Form>
        </Container>
    );
}
