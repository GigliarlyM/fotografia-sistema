import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/photo.css'
import './styles/cards.css'
import './styles/form.css'
import './styles/perfil-photographer.css'
import './styles/modal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
