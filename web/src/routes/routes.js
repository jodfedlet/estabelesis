import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Estabelecimento from '../pages/Estabelecimento';
import Estabelecimentos from '../pages/Estabelecimentos';
import CustomRoute from './CustomRoute';

export default function Routes(){
    return(
        <Switch>
            <CustomRoute exact path="/" component={Login}/>
            <CustomRoute 
                isLoginRequired
                exact path="/estabelecimento/:id" 
                component={Estabelecimento}
             />
            <CustomRoute 
              isLoginRequired
                exact path="/estabelecimento" 
                component={Estabelecimento}
             />
            <CustomRoute 
                isLoginRequired
                exact path="/estabelecimentos" 
                component={Estabelecimentos} 
            />
            <CustomRoute 
                exact path="/logout" 
                component={Login} 
            />
            <CustomRoute path="*" component={Login}/>
        </Switch>
    );
}