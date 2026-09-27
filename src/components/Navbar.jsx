import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {

  const { usuario, logout } = useAuth()
  const navigate = useNavigate()

  function sair() {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          DevPortfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menuPrincipal"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Início
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/portfolio"
              >
                Portfólio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contato"
              >
                Contato
              </Link>
            </li>

            {usuario ? (

              <>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/projetos"
                  >
                    Meus Projetos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/mensagens"
                  >
                    Mensagens
                  </Link>
                </li>

                <li className="nav-item ms-lg-3 my-2 my-lg-0">

                  <span className="navbar-text">
                    Olá, <strong>{usuario.nome}</strong>
                  </span>

                </li>

                <li className="nav-item ms-lg-2">

                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    onClick={sair}
                  >
                    Sair
                  </button>

                </li>

              </>

            ) : (

              <>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                  >
                    Entrar
                  </Link>
                </li>

                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">

                  <Link
                    className="btn btn-primary btn-sm"
                    to="/cadastro"
                  >
                    Criar conta
                  </Link>

                </li>

              </>

            )}

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar