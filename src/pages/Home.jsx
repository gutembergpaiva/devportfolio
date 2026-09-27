import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {

  const { usuario } = useAuth()

  return (
    <>

      <section className="bg-dark text-white py-5">

        <div className="container py-5">

          <div className="row align-items-center justify-content-center">

            <div className="col-lg-8 text-center">

              <span className="badge bg-primary mb-3 px-3 py-2">
                Seu portfólio profissional
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Mostre seus projetos para o mundo
              </h1>

              <p className="lead text-white-50 mb-4">
                Crie, gerencie e compartilhe seus projetos
                de forma simples, organizada e profissional.
              </p>

              <div className="d-flex justify-content-center gap-3 flex-wrap">

                {usuario ? (

                  <>
                    <Link
                      to="/dashboard"
                      className="btn btn-primary btn-lg"
                    >
                      Acessar Dashboard
                    </Link>

                    <Link
                      to="/novo-projeto"
                      className="btn btn-outline-light btn-lg"
                    >
                      Novo projeto
                    </Link>
                  </>

                ) : (

                  <>
                    <Link
                      to="/cadastro"
                      className="btn btn-primary btn-lg"
                    >
                      Criar meu portfólio
                    </Link>

                    <Link
                      to="/portfolio"
                      className="btn btn-outline-light btn-lg"
                    >
                      Ver projetos
                    </Link>
                  </>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Tudo o que você precisa
          </h2>

          <p className="text-muted">
            Uma plataforma simples para organizar e apresentar
            seus projetos profissionais.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body text-center p-4">

                <div className="display-6 mb-3">
                  💻
                </div>

                <h4 className="card-title fw-bold">
                  Gerencie projetos
                </h4>

                <p className="card-text text-muted">
                  Cadastre, edite e organize seus projetos
                  em um único lugar.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body text-center p-4">

                <div className="display-6 mb-3">
                  🚀
                </div>

                <h4 className="card-title fw-bold">
                  Compartilhe seu trabalho
                </h4>

                <p className="card-text text-muted">
                  Apresente seus projetos, tecnologias e links
                  através do seu portfólio.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body text-center p-4">

                <div className="display-6 mb-3">
                  ✉️
                </div>

                <h4 className="card-title fw-bold">
                  Receba contatos
                </h4>

                <p className="card-text text-muted">
                  Permita que visitantes enviem mensagens
                  através da plataforma.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-light py-5">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-8 text-center">

              <h2 className="fw-bold">
                Transforme seus projetos em um portfólio
              </h2>

              <p className="text-muted mt-3">
                Organize seus trabalhos, apresente suas habilidades
                e mantenha seu portfólio sempre atualizado.
              </p>

              {usuario ? (

                <Link
                  to="/projetos"
                  className="btn btn-primary mt-2"
                >
                  Gerenciar meus projetos
                </Link>

              ) : (

                <Link
                  to="/cadastro"
                  className="btn btn-primary mt-2"
                >
                  Começar agora
                </Link>

              )}

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Home