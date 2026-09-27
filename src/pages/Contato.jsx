import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContatos } from '../context/ContatoContext'

function Contato() {

  const { usuarioId } = useParams()
  const { adicionarMensagem } = useContatos()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')

  async function enviarMensagem(event) {

    event.preventDefault()

    if (!usuarioId) {
      return
    }

    setErro('')
    setEnviando(true)

    try {

      await adicionarMensagem({
        nome,
        email,
        assunto,
        mensagem,
        destinatarioId: usuarioId
      })

      setNome('')
      setEmail('')
      setAssunto('')
      setMensagem('')
      setEnviado(true)

    } catch (erro) {

      console.error(
        'Erro ao enviar contato:',
        erro
      )

      setErro(
        'Não foi possível enviar a mensagem.'
      )

    } finally {

      setEnviando(false)

    }
  }

  if (!usuarioId) {

    return (
      <div className="bg-light min-vh-100">

        <div className="container py-5">

          <div
            className="card border-0 shadow-sm mx-auto"
            style={{ maxWidth: '600px' }}
          >

            <div className="card-body text-center p-5">

              <div className="display-4 mb-3">
                ✉️
              </div>

              <h2 className="fw-bold">
                Entre em contato
              </h2>

              <p className="text-muted mt-3">
                Para enviar uma mensagem, escolha um
                portfólio e utilize a opção de contato
                disponível nele.
              </p>

              <Link
                to="/portfolio"
                className="btn btn-primary mt-2"
              >
                Ver portfólios
              </Link>

            </div>

          </div>

        </div>

      </div>
    )
  }

  return (
    <div className="bg-light min-vh-100">

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-7">

            <div className="text-center mb-4">

              <span className="badge bg-primary mb-3 px-3 py-2">
                Contato
              </span>

              <h1 className="fw-bold">
                Entre em Contato
              </h1>

              <p className="text-muted">
                Tem alguma dúvida, proposta ou oportunidade?
                Envie uma mensagem através do formulário.
              </p>

            </div>

            {enviado && (

              <div
                className="alert alert-success"
                role="alert"
              >
                <strong>Mensagem enviada!</strong>{' '}
                Seu contato foi registrado com sucesso.
              </div>

            )}

            {erro && (

              <div
                className="alert alert-danger">
                {erro}
              </div>

            )}

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4 p-md-5">

                <form onSubmit={enviarMensagem}>

                  <div className="mb-4">

                    <label
                      htmlFor="nomeContato"
                      className="form-label fw-semibold"
                    >
                      Nome
                    </label>

                    <input
                      id="nomeContato"
                      type="text"
                      className="form-control"
                      placeholder="Digite seu nome"
                      value={nome}
                      onChange={(event) => {
                        setNome(event.target.value)
                        setEnviado(false)
                      }}
                      disabled={enviando}
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="emailContato"
                      className="form-label fw-semibold"
                    >
                      E-mail
                    </label>

                    <input
                      id="emailContato"
                      type="email"
                      className="form-control"
                      placeholder="seuemail@email.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                        setEnviado(false)
                      }}
                      disabled={enviando}
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="assunto"
                      className="form-label fw-semibold"
                    >
                      Assunto
                    </label>

                    <input
                      id="assunto"
                      type="text"
                      className="form-control"
                      placeholder="Ex: Proposta de projeto"
                      value={assunto}
                      onChange={(event) => {
                        setAssunto(event.target.value)
                        setEnviado(false)
                      }}
                      disabled={enviando}
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="mensagem"
                      className="form-label fw-semibold"
                    >
                      Mensagem
                    </label>

                    <textarea
                      id="mensagem"
                      className="form-control"
                      rows="6"
                      placeholder="Digite sua mensagem..."
                      value={mensagem}
                      onChange={(event) => {
                        setMensagem(event.target.value)
                        setEnviado(false)
                      }}
                      disabled={enviando}
                      required
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                    disabled={enviando}
                  >
                    {enviando
                      ? 'Enviando...'
                      : 'Enviar mensagem'}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contato