import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Cadastro() {

  const navigate = useNavigate()
  const { cadastrar } = useAuth()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function criarConta(event) {

    event.preventDefault()

    setErro('')

    if (senha !== confirmarSenha) {
      setErro('As senhas não são iguais.')
      return
    }

    if (senha.length < 6) {
      setErro(
        'A senha deve possuir pelo menos 6 caracteres.'
      )
      return
    }

    setCarregando(true)

    const resultado = await cadastrar(
      nome,
      email,
      senha
    )

    setCarregando(false)

    if (!resultado.sucesso) {
      setErro(resultado.mensagem)
      return
    }

    navigate('/login')
  }

  return (
    <div className="bg-light">

      <div
        className="container d-flex align-items-center justify-content-center py-5"
        style={{ minHeight: 'calc(100vh - 56px)' }}
      >

        <div
          className="card shadow border-0 w-100"
          style={{ maxWidth: '500px' }}
        >

          <div className="card-body p-4 p-md-5">

            <div className="text-center mb-4">

              <h2 className="fw-bold mb-2">
                Crie sua conta
              </h2>

              <p className="text-muted mb-0">
                Comece a criar e gerenciar seu portfólio profissional.
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

            <form onSubmit={criarConta}>

              <div className="mb-3">

                <label
                  htmlFor="nome"
                  className="form-label fw-semibold"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  className="form-control"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(event) =>
                    setNome(event.target.value)
                  }
                  disabled={carregando}
                  required
                />

              </div>

              <div className="mb-3">

                <label
                  htmlFor="emailCadastro"
                  className="form-label fw-semibold"
                >
                  E-mail
                </label>

                <input
                  id="emailCadastro"
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

              <div className="mb-3">

                <label
                  htmlFor="senhaCadastro"
                  className="form-label fw-semibold"
                >
                  Senha
                </label>

                <input
                  id="senhaCadastro"
                  type="password"
                  className="form-control"
                  placeholder="Crie uma senha"
                  value={senha}
                  onChange={(event) =>
                    setSenha(event.target.value)
                  }
                  minLength="6"
                  disabled={carregando}
                  required
                />

                <div className="form-text">
                  A senha deve possuir pelo menos 6 caracteres.
                </div>

              </div>

              <div className="mb-4">

                <label
                  htmlFor="confirmarSenha"
                  className="form-label fw-semibold"
                >
                  Confirmar senha
                </label>

                <input
                  id="confirmarSenha"
                  type="password"
                  className="form-control"
                  placeholder="Digite a senha novamente"
                  value={confirmarSenha}
                  onChange={(event) =>
                    setConfirmarSenha(event.target.value)
                  }
                  minLength="6"
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
                  ? 'Criando conta...'
                  : 'Criar conta'}
              </button>

            </form>

            <hr className="my-4" />

            <p className="text-center text-muted mb-0">

              Já possui uma conta?{' '}

              <Link
                to="/login"
                className="text-decoration-none fw-semibold"
              >
                Entrar
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cadastro