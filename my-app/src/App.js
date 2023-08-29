import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Accueil from './Component/Component/Acceuil';
import PageProjet from './Component/Component/Page-Projets';
import Contact from './Component/Component/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Accueil />} />
        <Route path="/projets/:projectId" element={<PageProjet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
