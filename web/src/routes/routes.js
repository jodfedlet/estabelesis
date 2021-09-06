import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Estabelecimento from '../pages/Estabelecimento';
import Estabelecimentos from '../pages/Estabelecimentos';
import { useSelector } from 'react-redux';
//import CustomRoute from './CustomRoute';

import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Routes(){

    function CustomRoute({ isPrivate, ...rest }) {
        const data = useSelector(state => state.authReducer);
        if (data.isLoading) {
          return <Loading/>
        }
      
        if (isPrivate && !data.isLoggedIn) {
          return <Redirect to="/" />
        }
      
        return <Route {...rest} />;
      }

    return(
        <BrowserRouter>
        <Switch>
            <CustomRoute 
                exact path="/" 
                component={Login}
            />
            <CustomRoute 
                isPrivate
                path="/estabelecimento/:id" 
                exact component={Estabelecimento}
             />
            <CustomRoute 
                isPrivate
                path="/estabelecimento" 
                exact component={Estabelecimento}
             />
            <CustomRoute 
                isPrivate
                path="/estabelecimentos" 
                exact component={Estabelecimentos} 
            />
            <CustomRoute 
                isPrivate
                path="/logout" 
                exact component={Login} 
            />
            <CustomRoute 
                path="*" 
                component={Login} 
            />
        </Switch>
       </BrowserRouter>
    );
}