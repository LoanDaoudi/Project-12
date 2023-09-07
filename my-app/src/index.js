import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Acceuil from './Component/Component/Acceuil.jsx';
import MatrixBackground from './Component/Component/Matrix';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MatrixBackground />
    <Acceuil />
    
  </React.StrictMode>
);


reportWebVitals();
