//import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/home';
import LoginPhotographer from './pages/login-photographer';
import CadastroGeral from "./pages/signup-all";
import SignupPhotographer from './pages/signup-photographer';
import RouterPhotographer from './routes/photographer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/photographer" element={<LoginPhotographer />} />
        <Route path="signup/client" element={<CadastroGeral />} />
        <Route path='signup/photographer' element={<SignupPhotographer />} />
        <Route path='photographer/*' element={<RouterPhotographer />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;