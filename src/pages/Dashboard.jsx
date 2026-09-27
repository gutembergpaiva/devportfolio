import { Link } from 'react-router-dom'
import { useProjetos } from '../context/ProjetoContext'
import { useContatos } from '../context/ContatoContext'
import { useAuth } from '../context/AuthContext'

function Dashboard() {

  const { projetos } = useProjetos()
  const { mensagens } = useContatos()
  const { usuario } = useAuth()

  return (
    <div className="bg-light min-vh-100">

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">

          <div>

            <h1 className="fw-bold mb-1">
              Olá, {usuario?.nome}!
            </h1>

            <p className="text-muted mb-0">
              Acompanhe e gerencie seu portfólio.
            </p>

          </div>

          <Link
            to="/novo-projeto"
            className="btn btn-primary"
          >
            + Novo projeto
          </Link>

        </div>

        <div className="row g-4 mb-5">

          <div className="col-md-6">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-center">

                  <div>

                    <p className="text-muted mb-2">
                      Projetos cadastrados
                    </p>

                    <h2 className="display-5 fw-bold mb-0">
                      {projetos.length}
                    </h2>

                  </div>

                  <div className="display-5">
                    💻
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-center">

                  <div>

                    <p className="text-muted mb-2">
                      Contatos recebidos
                    </p>

                    <h2 className="display-5 fw-bold mb-0">
                      {mensagens.length}
                    </h2>

                  </div>

                  <div className="display-5">
                    ✉️
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="card border-0 shadow-sm">

          <div className="card-body p-4">

            <div className="mb-4">

              <h4 className="fw-bold mb-1">
                Gerenciamento
              </h4>

              <p className="text-muted mb-0">
                Acesse rapidamente as principais áreas da plataforma.
              </p>

            </div>

            <div className="row g-3">

              <div className="col-md-6 col-lg-3">

                <Link
                  to="/projetos"
                  className="btn btn-outline-primary w-100 py-3"
                >
                  Meus projetos
                </Link>

              </div>

              <div className="col-md-6 col-lg-3">

                <Link
                  to="/novo-projeto"
                  className="btn btn-outline-primary w-100 py-3"
                >
                  Cadastrar projeto
                </Link>

              </div>

              <div className="col-md-6 col-lg-3">

                <Link
                  to="/mensagens"
                  className="btn btn-outline-primary w-100 py-3"
                >
                  Mensagens
                </Link>

              </div>

              <div className="col-md-6 col-lg-3">

                <Link
                  to="/portfolio"
                  className="btn btn-outline-secondary w-100 py-3"
                >
                  Ver portfólio
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard