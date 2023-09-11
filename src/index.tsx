import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Store } from './store/store';
import '../src/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
