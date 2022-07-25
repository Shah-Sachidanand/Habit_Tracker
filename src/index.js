import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from './Store'
import { Provider } from 'react-redux';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

