import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

export default function CustomRoute({component: Component, isLoginRequired, ...rest}){
    const isLoggedIn = false;

    if(isLoginRequired && !isLoggedIn){
        return (
            <Redirect 
                to={{ pathname: '/login', state: { prevPath: rest.location.pathname}}}
            />
        )
    }

    return <Route {...rest} component={Component}/>
}

CustomRoute.defaultProps = {
    isLoginRequired: false,
}

CustomRoute.propTypes ={
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isLoginRequired: PropTypes.bool
}