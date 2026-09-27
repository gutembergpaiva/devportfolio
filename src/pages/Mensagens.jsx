import { Link } from 'react-router-dom'
import { useContatos } from '../context/ContatoContext'

function Mensagens() {

  const { mensagens, excluirMensagem } = useContatos()

  function confirmarExclusao(mensagem) {

    const confirmar = window.confirm(
      `Deseja realmente excluir a mensagem de "${mensagem.nome}"?`
    )

    if (confirmar) {
      excluirMensagem(mensagem.id)
    }
  }

  return (
    <div className="bg-light min-vh-100">

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

          <div>

            <h1 className="fw-bold mb-1">
              Mensagens
            </h1>

            <p className="text-muted mb-0">
              Veja os contatos recebidos através do seu portfólio.
            </p>

          </div>

          <Link
            to="/dashboard"
            className="btn btn-outline-secondary"
          >
            Voltar ao Dashboard
          </Link>

        </div>

        {mensagens.length === 0 ? (

          <div className="card border-0 shadow-sm">

            <div className="card-body text-center py-5">

              <div className="display-4 mb-3">
                ✉️
              </div>

              <h4 className="fw-bold">
                Nenhuma mensagem recebida
              </h4>

              <p className="text-muted mb-0">
                As mensagens enviadas através do formulário
                de contato aparecerão aqui.
              </p>

            </div>

          </div>

        ) : (

          <div className="row g-4">

            {mensagens.map((item) => (

              <div
                className="col-lg-6"
                key={item.id}
              >

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-start gap-3 mb-3">

                      <div>

                        <h4 className="fw-bold mb-1">
                          {item.assunto}
                        </h4>

                        <small className="text-muted">
                          Recebido em {item.data}
                        </small>

                      </div>

                      <span className="badge bg-primary">
                        Mensagem
                      </span>

                    </div>

                    <div className="bg-light rounded p-3 mb-3">

                      <p className="mb-1">
                        <strong>Nome:</strong>{' '}
                        {item.nome}
                      </p>

                      <p className="mb-0">
                        <strong>E-mail:</strong>{' '}

                        <a
                          href={`mailto:${item.email}`}
                          className="text-decoration-none"
                        >
                          {item.email}
                        </a>

                      </p>

                    </div>

                    <p className="mb-0">
                      {item.mensagem}
                    </p>

                  </div>

                  <div className="card-footer bg-white border-0 px-4 pb-4">

                    <div className="d-flex gap-2 flex-wrap">

                      <a
                        href={`mailto:${item.email}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Responder
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          confirmarExclusao(item)
                        }
                      >
                        Excluir
                      </button>

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

export default Mensagens