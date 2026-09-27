import { Link } from 'react-router-dom'
import { useProjetos } from '../context/ProjetoContext'

function Projetos() {

  const { projetos, excluirProjeto } = useProjetos()

  function confirmarExclusao(projeto) {

    const confirmar = window.confirm(
      `Deseja realmente excluir o projeto "${projeto.nome}"?`
    )

    if (confirmar) {
      excluirProjeto(projeto.id)
    }
  }

  return (
    <div className="bg-light min-vh-100">

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

          <div>

            <h1 className="fw-bold mb-1">
              Meus Projetos
            </h1>

            <p className="text-muted mb-0">
              Gerencie os projetos que fazem parte do seu portfólio.
            </p>

          </div>

          <Link
            to="/novo-projeto"
            className="btn btn-primary"
          >
            + Novo projeto
          </Link>

        </div>

        {projetos.length === 0 ? (

          <div className="card border-0 shadow-sm">

            <div className="card-body text-center py-5">

              <div className="display-4 mb-3">
                💻
              </div>

              <h4 className="fw-bold">
                Nenhum projeto cadastrado
              </h4>

              <p className="text-muted">
                Cadastre seu primeiro projeto para começar
                a construir seu portfólio.
              </p>

              <Link
                to="/novo-projeto"
                className="btn btn-primary mt-2"
              >
                Cadastrar primeiro projeto
              </Link>

            </div>

          </div>

        ) : (

          <div className="row g-4">

            {projetos.map((projeto) => (

              <div
                className="col-md-6 col-lg-4"
                key={projeto.id}
              >

                <div className="card border-0 shadow-sm h-100">

                  {projeto.imagem ? (

                    <img
                      src={projeto.imagem}
                      className="card-img-top"
                      alt={projeto.nome}
                      style={{
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />

                  ) : (

                    <div
                      className="bg-secondary-subtle d-flex align-items-center justify-content-center"
                      style={{ height: '200px' }}
                    >
                      <span className="display-5">
                        💻
                      </span>
                    </div>

                  )}

                  <div className="card-body p-4">

                    <h4 className="card-title fw-bold">
                      {projeto.nome}
                    </h4>

                    <p className="card-text text-muted">
                      {projeto.descricao}
                    </p>

                    <p className="mb-1">
                      <strong>Tecnologias</strong>
                    </p>

                    <p className="text-muted mb-0">
                      {projeto.tecnologias}
                    </p>

                  </div>

                  <div className="card-footer bg-white border-0 px-4 pb-4">

                    <div className="d-flex gap-2 flex-wrap">

                      <Link
                        to={`/editar-projeto/${projeto.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Editar
                      </Link>

                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          confirmarExclusao(projeto)
                        }
                      >
                        Excluir
                      </button>

                      {projeto.github && (

                        <a
                          href={projeto.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark btn-sm"
                        >
                          GitHub
                        </a>

                      )}

                      {projeto.link && (

                        <a
                          href={projeto.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-success btn-sm"
                        >
                          Ver projeto
                        </a>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default Projetos