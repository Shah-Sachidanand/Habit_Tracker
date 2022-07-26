import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from './Store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

