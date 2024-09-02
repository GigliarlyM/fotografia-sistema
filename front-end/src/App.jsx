//import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPhotographer from './pages/login-photographer';
import CadastroClient from "./pages/signup-client"
import SignupPhotographer from './pages/signup-photographer';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/photographer" element={<LoginPhotographer />} />
        <Route path="signup/client" element={<CadastroClient />} />
        <Route path='signup/photographer' element={<SignupPhotographer />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;