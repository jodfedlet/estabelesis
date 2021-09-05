import React from 'react';
import Login from './pages/Login';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styleGlobal';
import history from './services/history';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header/>
          <Login/>
          <GlobalStyle/>
          <ToastContainer autoClose={3000} className='toast-container'/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
