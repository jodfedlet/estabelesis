import React from 'react';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions'
import history from '../../services/history'
import { useDispatch } from 'react-redux';

export default function Header(){

    const dispatcher = useDispatch();

    const handleLogout = e =>{
        e.preventDefault();
        dispatcher(actions.loginFailure())
        history.push('/')
    }
    return (
        <Nav>
            <Link to="/estabelecimentos">
                <FaHome size={25}/>
            </Link>
            <Link to="/logout" onClick={handleLogout}>
                <FaSignOutAlt size={25}/>
            </Link>
        </Nav>
    );
}