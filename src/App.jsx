import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import RotaProtegida from './components/RotaProtegida'

import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import Projetos from './pages/Projetos'
import NovoProjeto from './pages/NovoProjeto'
import EditarProjeto from './pages/EditarProjeto'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
import Mensagens from './pages/Mensagens'
import NaoEncontrada from './pages/NaoEncontrada'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/portfolio/:usuarioId"
          element={<Portfolio />}
        />

        <Route
          path="/contato"
          element={<Contato />}
        />

        <Route
          path="/contato/:usuarioId"
          element={<Contato />}
        />

        <Route
          path="/dashboard"
          element={
            <RotaProtegida>
              <Dashboard />
            </RotaProtegida>
          }
        />

        <Route
          path="/projetos"
          element={
            <RotaProtegida>
              <Projetos />
            </RotaProtegida>
          }
        />

        <Route
          path="/novo-projeto"
          element={
            <RotaProtegida>
              <NovoProjeto />
            </RotaProtegida>
          }
        />

        <Route
          path="/editar-projeto/:id"
          element={
            <RotaProtegida>
              <EditarProjeto />
            </RotaProtegida>
          }
        />

        <Route
          path="/mensagens"
          element={
            <RotaProtegida>
              <Mensagens />
            </RotaProtegida>
          }
        />

        <Route
          path="*"
          element={<NaoEncontrada />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App