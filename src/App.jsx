import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav.component';
import InputCatalog from './components/InputCatalog/InputCatalog.component';
import FormCatalog from './components/FormCatalog/FormCatalog.component';

import "./index.css"

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Routes>
          <Route path='/' />
          <Route path="/inputs" element={<InputCatalog />} />
          <Route path="/forms" element={<FormCatalog />} />
          {/* Agrega más rutas para otros tipos de componentes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
