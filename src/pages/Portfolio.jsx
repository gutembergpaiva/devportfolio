import { Link, useParams } from 'react-router-dom'
import { useProjetos } from '../context/ProjetoContext'
import { useAuth } from '../context/AuthContext'

function Portfolio() {

  const { usuarioId } = useParams()

  const {
    projetos,
    todosProjetos
  } = useProjetos()

  const { usuario } = useAuth()

  const portfolioIndividual = Boolean(usuarioId)

  let projetosExibidos = []
  let donoPortfolio = null

  if (portfolioIndividual) {

    projetosExibidos = todosProjetos.filter(
      (projeto) =>
        projeto.usuarioId === usuarioId
    )

    donoPortfolio = projetosExibidos[0]

  } else if (usuario) {

    projetosExibidos = projetos

    donoPortfolio = projetos[0]

  } else {

    projetosExibidos = todosProjetos

  }

  const nomePortfolio =
    donoPortfolio?.usuarioNome ||
    usuario?.nome

  return (
    <>

      <section className="bg-dark text-white py-5">

        <div className="container text-center py-4">

          <span className="badge bg-primary mb-3 px-3 py-2">
            Portfólio
          </span>

          <h1 className="display-5 fw-bold">

            {portfolioIndividual || usuario
              ? nomePortfolio
                ? `Portfólio de ${nomePortfolio}`
                : 'Portfólio'
              : 'Projetos da Comunidade'}

          </h1>

          <p className="lead text-white-50 mb-0">

            {portfolioIndividual || usuario
              ? 'Conheça os projetos e as tecnologias utilizadas.'
              : 'Conheça projetos desenvolvidos pelos usuários da plataforma.'}

          </p>

        </div>

      </section>

      <section className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Projetos
          </h2>

          <p className="text-muted">

            {portfolioIndividual || usuario
              ? 'Confira os projetos deste portfólio.'
              : 'Escolha um projeto para conhecer o portfólio do desenvolvedor.'}

          </p>

        </div>

        {projetosExibidos.length === 0 ? (

          <div className="text-center py-5">

            <div className="display-4 mb-3">
              💻
            </div>

            <h4 className="fw-bold">
              Nenhum projeto disponível
            </h4>

            <p className="text-muted">
              Ainda não existem projetos para serem exibidos.
            </p>

            {usuario && !portfolioIndividual && (

              <Link
                to="/novo-projeto"
                className="btn btn-primary mt-2"
              >
                Cadastrar projeto
              </Link>

            )}

          </div>

        ) : (

          <div className="row g-4">

            {projetosExibidos.map((projeto) => (

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
                        height: '220px',
                        objectFit: 'cover'
                      }}
                    />

                  ) : (

                    <div
                      className="bg-light d-flex align-items-center justify-content-center"
                      style={{ height: '220px' }}
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

                    {!portfolioIndividual && !usuario && (
                      <p className="small text-primary fw-semibold mb-2">
                        {projeto.usuarioNome}
                      </p>
                    )}

                    <p className="card-text text-muted">
                      {projeto.descricao}
                    </p>

                    <p className="fw-semibold mb-1">
                      Tecnologias
                    </p>

                    <p className="text-muted mb-0">
                      {projeto.tecnologias}
                    </p>

                  </div>

                  <div className="card-footer bg-white border-0 px-4 pb-4">

                    <div className="d-flex gap-2 flex-wrap">

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
                          className="btn btn-outline-primary btn-sm"
                        >
                          Ver projeto
                        </a>

                      )}

                      {!portfolioIndividual &&
                        !usuario &&
                        projeto.usuarioId && (

                          <Link
                            to={`/portfolio/${projeto.usuarioId}`}
                            className="btn btn-primary btn-sm"
                          >
                            Ver portfólio
                          </Link>

                        )}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {(portfolioIndividual || usuario) && (

        <section className="bg-light py-5">

          <div className="container text-center">

            <h2 className="fw-bold">
              Gostou de algum projeto?
            </h2>

            <p className="text-muted">
              Entre em contato para conversar sobre projetos,
              oportunidades ou desenvolvimento.
            </p>

            <Link
              to={`/contato/${
                portfolioIndividual
                  ? usuarioId
                  : usuario.id
              }`}
              className="btn btn-primary"
            >
              Entrar em contato
            </Link>

          </div>

        </section>

      )}

    </>
  )
}

export default Portfolio