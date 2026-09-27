import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <div className="container py-5">

      <div
        className="text-center py-5"
        style={{ minHeight: '60vh' }}
      >

        <h1 className="display-1 fw-bold">
          404
        </h1>

        <h2 className="fw-bold">
          Página não encontrada
        </h2>

        <p className="text-muted mt-3">
          A página que você tentou acessar não existe.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-3"
        >
          Voltar para o início
        </Link>

      </div>

    </div>
  )
}

export default NaoEncontrada