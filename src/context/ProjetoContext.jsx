import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore'

import { db } from '../firebase/firebaseConfig'
import { useAuth } from './AuthContext'

const ProjetoContext = createContext()

export function ProjetoProvider({ children }) {

  const { usuario } = useAuth()

  const [projetos, setProjetos] = useState([])
  const [todosProjetos, setTodosProjetos] = useState([])
  const [carregandoProjetos, setCarregandoProjetos] =
    useState(true)

  useEffect(() => {

    if (!usuario) {
      setProjetos([])
      setCarregandoProjetos(false)
      return
    }

    setCarregandoProjetos(true)

    const consulta = query(
      collection(db, 'projetos'),
      where('usuarioId', '==', usuario.id)
    )

    const cancelarObservador = onSnapshot(
      consulta,
      (resultado) => {

        const listaProjetos =
          resultado.docs.map((documento) => ({
            id: documento.id,
            ...documento.data()
          }))

        setProjetos(listaProjetos)
        setCarregandoProjetos(false)
      },
      (erro) => {

        console.error(
          'Erro ao carregar projetos:',
          erro
        )

        setCarregandoProjetos(false)
      }
    )

    return () => cancelarObservador()

  }, [usuario])

  useEffect(() => {

    const cancelarObservador = onSnapshot(
      collection(db, 'projetos'),
      (resultado) => {

        const listaProjetos =
          resultado.docs.map((documento) => ({
            id: documento.id,
            ...documento.data()
          }))

        setTodosProjetos(listaProjetos)
      },
      (erro) => {

        console.error(
          'Erro ao carregar portfólio:',
          erro
        )
      }
    )

    return () => cancelarObservador()

  }, [])

  async function adicionarProjeto(projeto) {

    if (!usuario) {
      return
    }

    try {

      await addDoc(
        collection(db, 'projetos'),
        {
          ...projeto,
          usuarioId: usuario.id,
          usuarioNome: usuario.nome,
          usuarioEmail: usuario.email,
          criadoEm: new Date().toISOString()
        }
      )

    } catch (erro) {

      console.error(
        'Erro ao adicionar projeto:',
        erro
      )

      throw erro
    }
  }

  async function excluirProjeto(id) {

    if (!usuario) {
      return
    }

    try {

      const projeto = projetos.find(
        (item) => item.id === id
      )

      if (!projeto) {
        return
      }

      await deleteDoc(
        doc(db, 'projetos', id)
      )

    } catch (erro) {

      console.error(
        'Erro ao excluir projeto:',
        erro
      )

      throw erro
    }
  }

  async function editarProjeto(id, novosDados) {

    if (!usuario) {
      return
    }

    try {

      const projeto = projetos.find(
        (item) => item.id === id
      )

      if (!projeto) {
        return
      }

      await updateDoc(
        doc(db, 'projetos', id),
        novosDados
      )

    } catch (erro) {

      console.error(
        'Erro ao editar projeto:',
        erro
      )

      throw erro
    }
  }

  return (
    <ProjetoContext.Provider
      value={{
        projetos,
        todosProjetos,
        carregandoProjetos,
        adicionarProjeto,
        excluirProjeto,
        editarProjeto
      }}
    >
      {children}
    </ProjetoContext.Provider>
  )
}

export function useProjetos() {
  return useContext(ProjetoContext)
}