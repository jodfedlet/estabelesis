import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import persistedreducers from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedreducers(rootReducer), 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;