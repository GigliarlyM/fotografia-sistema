//import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPhotographer from './pages/login-photographer';
import Cadastro from "./pages/cadastro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photographer" element={<LoginPhotographer />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;