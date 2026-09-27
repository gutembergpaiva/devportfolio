import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProjetos } from '../context/ProjetoContext'

function NovoProjeto() {

  const navigate = useNavigate()
  const { adicionarProjeto } = useProjetos()

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tecnologias, setTecnologias] = useState('')
  const [github, setGithub] = useState('')
  const [link, setLink] = useState('')
  const [imagem, setImagem] = useState('')

  const [cadastrando, setCadastrando] = useState(false)
  const [erro, setErro] = useState('')

  async function cadastrarProjeto(event) {

    event.preventDefault()

    setErro('')
    setCadastrando(true)

    const projeto = {
      nome,
      descricao,
      tecnologias,
      github,
      link,
      imagem
    }

    try {

      await adicionarProjeto(projeto)

      navigate('/projetos')

    } catch (erro) {

      console.error(
        'Erro ao cadastrar projeto:',
        erro
      )

      setErro(
        'Não foi possível cadastrar o projeto.'
      )

    } finally {

      setCadastrando(false)

    }
  }

  return (
    <div className="bg-light min-vh-100">

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

              <div>
                <h1 className="fw-bold mb-1">
                  Novo Projeto
                </h1>

                <p className="text-muted mb-0">
                  Adicione um novo projeto ao seu portfólio.
                </p>
              </div>

              <Link
                to="/projetos"
                className="btn btn-outline-secondary"
              >
                Voltar
              </Link>

            </div>

            {erro && (
              <div
                className="alert alert-danger"
                role="alert"
              >
                {erro}
              </div>
            )}

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4 p-md-5">

                <form onSubmit={cadastrarProjeto}>

                  <div className="mb-4">

                    <label
                      htmlFor="nomeProjeto"
                      className="form-label fw-semibold"
                    >
                      Nome do projeto
                    </label>

                    <input
                      id="nomeProjeto"
                      type="text"
                      className="form-control"
                      placeholder="Ex: Sistema de Controle Financeiro"
                      value={nome}
                      onChange={(event) =>
                        setNome(event.target.value)
                      }
                      disabled={cadastrando}
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="descricaoProjeto"
                      className="form-label fw-semibold"
                    >
                      Descrição
                    </label>

                    <textarea
                      id="descricaoProjeto"
                      className="form-control"
                      rows="5"
                      placeholder="Descreva as principais funcionalidades do projeto..."
                      value={descricao}
                      onChange={(event) =>
                        setDescricao(event.target.value)
                      }
                      disabled={cadastrando}
                      required
                    ></textarea>

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="tecnologias"
                      className="form-label fw-semibold"
                    >
                      Tecnologias utilizadas
                    </label>

                    <input
                      id="tecnologias"
                      type="text"
                      className="form-control"
                      placeholder="Ex: React, JavaScript, Bootstrap"
                      value={tecnologias}
                      onChange={(event) =>
                        setTecnologias(event.target.value)
                      }
                      disabled={cadastrando}
                      required
                    />

                    <div className="form-text">
                      Informe as principais tecnologias utilizadas no projeto.
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-md-6 mb-4">

                      <label
                        htmlFor="github"
                        className="form-label fw-semibold"
                      >
                        GitHub
                      </label>

                      <input
                        id="github"
                        type="url"
                        className="form-control"
                        placeholder="https://github.com/usuario/projeto"
                        value={github}
                        onChange={(event) =>
                          setGithub(event.target.value)
                        }
                        disabled={cadastrando}
                      />

                    </div>

                    <div className="col-md-6 mb-4">

                      <label
                        htmlFor="linkProjeto"
                        className="form-label fw-semibold"
                      >
                        Link do projeto
                      </label>

                      <input
                        id="linkProjeto"
                        type="url"
                        className="form-control"
                        placeholder="https://meuprojeto.com"
                        value={link}
                        onChange={(event) =>
                          setLink(event.target.value)
                        }
                        disabled={cadastrando}
                      />

                    </div>

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="imagem"
                      className="form-label fw-semibold"
                    >
                      URL da imagem
                    </label>

                    <input
                      id="imagem"
                      type="url"
                      className="form-control"
                      placeholder="https://exemplo.com/imagem.jpg"
                      value={imagem}
                      onChange={(event) =>
                        setImagem(event.target.value)
                      }
                      disabled={cadastrando}
                    />

                    <div className="form-text">
                      Este campo é opcional. Informe uma imagem
                      para representar o projeto.
                    </div>

                  </div>

                  {imagem && (

                    <div className="mb-4">

                      <p className="fw-semibold mb-2">
                        Pré-visualização
                      </p>

                      <img
                        src={imagem}
                        alt="Pré-visualização do projeto"
                        className="img-fluid rounded border"
                        style={{
                          maxHeight: '300px',
                          width: '100%',
                          objectFit: 'cover'
                        }}
                      />

                    </div>

                  )}

                  <hr className="my-4" />

                  <div className="d-flex justify-content-end gap-2 flex-wrap">

                    <Link
                      to="/projetos"
                      className={`btn btn-outline-secondary ${
                        cadastrando ? 'disabled' : ''
                      }`}
                    >
                      Cancelar
                    </Link>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={cadastrando}
                    >
                      {cadastrando
                        ? 'Cadastrando...'
                        : 'Cadastrar projeto'}
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default NovoProjeto