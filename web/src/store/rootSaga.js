import { all } from 'redux-saga/effects';

import sagas from './modules/sagas';

export default function* rootSaga(){
    return yield all([
        sagas
    ]);
}