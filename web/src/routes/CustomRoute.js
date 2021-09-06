import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CustomRoute({component: Component, isLoginRequired, ...rest}){
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
    if(isLoginRequired && !isLoggedIn){
        return (
            <Redirect 
                to={{ pathname: '/', state: { prevPath: rest.location.pathname}}}
            />
        )
    }
    return <Route {...rest} component={Component}/>
}

/*
CustomRoute.defaultProps = {
    isLoginRequired: true,
}
*/

CustomRoute.propTypes ={
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isLoginRequired: PropTypes.bool
}