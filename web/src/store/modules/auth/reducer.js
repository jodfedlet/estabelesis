import * as types from '../types'
import api from '../../../services/api';

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    isLoggedIn: false,
    token:false,
    user:{},
    isLoading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case types.LOGIN_REQUEST:
            const reqState = { ...state}
            reqState.isLoading = true;
            return reqState;

        case types.LOGIN_SUCCESS:
            const newStates = { ...state}
            newStates.isLoggedIn = true;
            newStates.isLoading = false;
            newStates.token = action.payload.token;
            newStates.user = action.payload.user;
            return newStates;    

        case types.LOGIN_FAILURE:
            delete api.defaults.headers.Authorization;
            const newState = { ...initialState}
            return newState;  
        default:
            return state;
    }
}