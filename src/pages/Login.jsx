import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {

  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function entrar(event) {

    event.preventDefault()

    setErro('')
    setCarregando(true)

    const sucesso = await login(
      email,
      senha
    )

    setCarregando(false)

    if (sucesso) {
      navigate('/dashboard')
    } else {
      setErro('E-mail ou senha inválidos.')
    }
  }

  return (
    <div className="bg-light">

      <div
        className="container d-flex align-items-center justify-content-center py-5"
        style={{ minHeight: 'calc(100vh - 56px)' }}
      >

        <div
          className="card shadow border-0 w-100"
          style={{ maxWidth: '450px' }}
        >

          <div className="card-body p-4 p-md-5">

            <div className="text-center mb-4">

              <h2 className="fw-bold mb-2">
                Bem-vindo de volta
              </h2>

              <p className="text-muted mb-0">
                Entre na sua conta para gerenciar seu portfólio.
              </p>

            </div>

            {erro && (

              <div
                className="alert alert-danger"
                role="alert"
              >
                {erro}
              </div>

            )}

            <form onSubmit={entrar}>

              <div className="mb-3">

                <label
                  htmlFor="email"
                  className="form-label fw-semibold"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="seuemail@email.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  disabled={carregando}
                  required
                />

              </div>

              <div className="mb-4">

                <label
                  htmlFor="senha"
                  className="form-label fw-semibold"
                >
                  Senha
                </label>

                <input
                  id="senha"
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(event) =>
                    setSenha(event.target.value)
                  }
                  disabled={carregando}
                  required
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
                disabled={carregando}
              >
                {carregando
                  ? 'Entrando...'
                  : 'Entrar'}
              </button>

            </form>

            <hr className="my-4" />

            <p className="text-center text-muted mb-0">

              Ainda não possui uma conta?{' '}

              <Link
                to="/cadastro"
                className="text-decoration-none fw-semibold"
              >
                Criar conta
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login