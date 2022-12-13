import logo from './FullLogo_Transparent.png';
import './App.css';
import { CrudProduitErabliereApi } from './features/produit/CrudProduitErabliereApi';
import { CrudDocument } from './features/document/CrudDocument';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className='App-header'>
          <Routes>
            <Route path="/" element={<CrudProduitErabliereApi />} />
            <Route path="/document" element={<CrudDocument />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
