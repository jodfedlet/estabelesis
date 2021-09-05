import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

const request = () =>
    new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve();
    }, 600);
})


function* sagaRequest(){
    try{
        yield call(request)
        yield put(actions.buttonClickSuccess())
    }catch{
        yield put(actions.buttonClickFailure())
    }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, sagaRequest)])