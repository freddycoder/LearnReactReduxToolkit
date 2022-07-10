import React from 'react';
import logo from './FullLogo_Transparent.png';
import './App.css';
import CrudForfaitErabliereApi from './features/CrudForfaitErabliereApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CrudForfaitErabliereApi />       
      </header>
    </div>
  );
}

export default App;
