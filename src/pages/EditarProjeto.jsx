import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useProjetos } from '../context/ProjetoContext'

function EditarProjeto() {

  const { id } = useParams()
  const navigate = useNavigate()

  const {
    projetos,
    editarProjeto,
    carregandoProjetos
  } = useProjetos()

  const projeto = projetos.find(
    (projeto) => projeto.id === id
  )

  const [nome, setNome] =
    useState(projeto?.nome || '')

  const [descricao, setDescricao] =
    useState(projeto?.descricao || '')

  const [tecnologias, setTecnologias] =
    useState(projeto?.tecnologias || '')

  const [github, setGithub] =
    useState(projeto?.github || '')

  const [link, setLink] =
    useState(projeto?.link || '')

  const [imagem, setImagem] =
    useState(projeto?.imagem || '')

  if (carregandoProjetos) {

    return (
      <div className="bg-light min-vh-100">

        <div className="container py-5 text-center">

          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">
              Carregando...
            </span>
          </div>

          <p className="text-muted mt-3">
            Carregando projeto...
          </p>

        </div>

      </div>
    )
  }

  if (!projeto) {

    return (
      <div className="bg-light min-vh-100">

        <div className="container py-5">

          <div className="text-center py-5">

            <h2 className="fw-bold">
              Projeto não encontrado
            </h2>

            <p className="text-muted">
              O projeto solicitado não existe ou não pertence
              à sua conta.
            </p>

            <Link
              to="/projetos"
              className="btn btn-primary mt-2"
            >
              Voltar para projetos
            </Link>

          </div>

        </div>

      </div>
    )
  }

  async function salvarAlteracoes(event) {

    event.preventDefault()

    try {

      await editarProjeto(id, {
        nome,
        descricao,
        tecnologias,
        github,
        link,
        imagem
      })

      navigate('/projetos')

    } catch (erro) {

      console.error(
        'Erro ao salvar alterações:',
        erro
      )
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
                  Editar Projeto
                </h1>

                <p className="text-muted mb-0">
                  Atualize as informações do seu projeto.
                </p>

              </div>

              <Link
                to="/projetos"
                className="btn btn-outline-secondary"
              >
                Voltar
              </Link>

            </div>

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4 p-md-5">

                <form onSubmit={salvarAlteracoes}>

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
                      value={nome}
                      onChange={(event) =>
                        setNome(event.target.value)
                      }
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
                      value={descricao}
                      onChange={(event) =>
                        setDescricao(event.target.value)
                      }
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
                      value={tecnologias}
                      onChange={(event) =>
                        setTecnologias(event.target.value)
                      }
                      required
                    />

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
                    />

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
                      className="btn btn-outline-secondary"
                    >
                      Cancelar
                    </Link>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Salvar alterações
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

export default EditarProjeto