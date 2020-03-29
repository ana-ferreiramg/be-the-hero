import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( // retirar react.strictmode caso dê algum erro
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

