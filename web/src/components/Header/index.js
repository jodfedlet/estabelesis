import React from 'react';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header(){

    const buttonClicked = useSelector(state => state.firstReducer.buttonClicked)
    return (
        <Nav>
            <Link to="/home">
                <FaHome size={25}/>
            </Link>
            <Link to="/logout">
                <FaSignOutAlt size={25}/>
            </Link>
        </Nav>
    );
}