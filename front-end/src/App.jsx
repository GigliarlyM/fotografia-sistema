//import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPhotographer from './pages/login-photographer';
import Cadastro from "./pages/cadastro"
import SignupPhotographer from './pages/signin-photographer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photographer" element={<LoginPhotographer />} />
        <Route path="/signup/client" element={<Cadastro />} />
        <Route path='/signup/photographer' element={<SignupPhotographer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;