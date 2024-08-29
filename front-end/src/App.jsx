//import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPhotographer from './pages/login-photographer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photographer" element={<LoginPhotographer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;