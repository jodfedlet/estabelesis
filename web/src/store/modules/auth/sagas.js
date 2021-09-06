import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import get from 'lodash';

function* loginRequest({payload}){
    try{
        const { email, password } = payload;
        const response = yield call(api.post, '/auth/login',{email, password});
        yield put(actions.loginSuccess({...response.data}))
        toast.success('Login realizado com sucesso!');
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
       
        if(payload.prevPath === '/'){
            history.push('/estabelecimentos');
        }else{
            history.push(payload.prevPath);
        }
        //history.push(payload.prevPath);
    }catch(e){
        toast.error('Email ou senha inválidos.');
        yield put(actions.loginFailure())
    }
}

function persistRehydrate({payload}){
    const token = get(payload, 'authReducer.token','');

    if(!token)
        return
    api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.LOGIN_REQUEST, persistRehydrate)
])