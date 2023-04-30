import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { persistedStore, store } from './redux/store.js';
import App from './components/App/App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import ContainerPage from './components/ContainerPage/ContainerPage';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loader={null} persistor={persistedStore}>
      <BrowserRouter>
        <ContainerPage>
          <App />
        </ContainerPage>
      </BrowserRouter>
      <ToastContainer />
    </PersistGate>
  </Provider>
);
