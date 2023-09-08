import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Acceuil from './Component/Component/Acceuil';
import MatrixBackground from './Component/Component/Matrix';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MatrixBackground />
    <App >
      <Acceuil/>
    </App>
  </React.StrictMode>
);

reportWebVitals();
