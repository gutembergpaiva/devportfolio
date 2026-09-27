import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'

import App from './App.jsx'

import { ProjetoProvider } from './context/ProjetoContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ContatoProvider } from './context/ContatoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

      <ProjetoProvider>

        <ContatoProvider>

          <App />

        </ContatoProvider>

      </ProjetoProvider>

    </AuthProvider>

  </StrictMode>
)