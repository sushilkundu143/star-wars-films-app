// index.tsx
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import AppWrapper from './index';
import store from './app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
