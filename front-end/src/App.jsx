//import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/home';
import LoginClient from './pages/login-client';
import LoginPhotographer from './pages/login-photographer';
import CadastroGeral from "./pages/signup-all";
import RouterPhotographer from './routes/photographer';
import RouterClient from './routes/client';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/photographer" element={<LoginPhotographer />} />
        <Route path="login/client" element={<LoginClient />} />
        <Route path="signup" element={<CadastroGeral />} />
        <Route path='photographer/*' element={<RouterPhotographer />} />       
        <Route path='client/*' element={<RouterClient />} />       
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;