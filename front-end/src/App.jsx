//import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPhotographer from './pages/login-photographer';
import CadastroClient from "./pages/signup-client"
import SignupPhotographer from './pages/signup-photographer';
import Home from './pages/home';
import PerfilPhotographer from './pages/perfil-photographer';
import AlterDataPhotographer from './pages/alter-photographer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/photographer" element={<LoginPhotographer />} />
        <Route path="signup/client" element={<CadastroClient />} />
        <Route path='signup/photographer' element={<SignupPhotographer />} />
        <Route path='photographer/alter' element={<AlterDataPhotographer />} />
        <Route path='photographer' element={<PerfilPhotographer />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;