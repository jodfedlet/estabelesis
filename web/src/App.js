import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes/routes';

import GlobalStyle from './styleGlobal';
import history from './services/history';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes/>
          <GlobalStyle/>
          <ToastContainer autoClose={3000} className='toast-container'/>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
