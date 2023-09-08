
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Accueil from './Component/Component/Acceuil';
import PageProjet from './Component/Component/Page-Projets';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/Project-12" element={<Accueil />} />
        <Route path="/projets/:projectId" element={<PageProjet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
