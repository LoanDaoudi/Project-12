import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Supprimez l'import suivant si vous ne voulez pas l'utiliser
// import './index2.css'; 
import Acceuil from './Component/Component/Acceuil';
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