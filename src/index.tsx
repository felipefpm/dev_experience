import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './Services/firebase';
import GlobalStyles from './Styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />    
  </React.StrictMode>,
  document.getElementById('root')
);
