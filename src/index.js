import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/AppContainer';
import '../src/styles/global.scss';
import { Provider } from 'react-redux';
import store from '../src/components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
