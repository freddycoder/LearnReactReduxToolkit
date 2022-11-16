import logo from './FullLogo_Transparent.png';
import './App.css';
import { CrudProduitErabliereApi } from './features/produit/CrudProduitErabliereApi';
import { CrudDocument } from './features/document/CrudDocument';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<CrudProduitErabliereApi />} />
            <Route path="/document" element={<CrudDocument />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
