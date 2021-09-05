import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import CustomRoute from './CustomRoute';
import { toast } from 'react-toastify';

export default function Routes(){

    toast.success('teste test etste');
    return(
        <Switch>
            <CustomRoute exact path="/" component={Login}/>
            <CustomRoute exact path="/home" component={Login} />
            <CustomRoute exact path="/logout" component={Login} />
            <CustomRoute path="*" component={Login}/>
        </Switch>
    );
}