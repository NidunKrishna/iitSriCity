import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Ui from '../src/ui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
    <Ui />
  </React.StrictMode>
);

reportWebVitals();
