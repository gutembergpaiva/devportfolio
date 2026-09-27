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
  doc,
  onSnapshot,
  orderBy,
  query,
  where
} from 'firebase/firestore'

import { db } from '../firebase/firebaseConfig'
import { useAuth } from './AuthContext'

const ContatoContext = createContext()

export function ContatoProvider({ children }) {

  const { usuario } = useAuth()

  const [mensagens, setMensagens] = useState([])
  const [carregandoMensagens, setCarregandoMensagens] =
    useState(true)

  useEffect(() => {

    if (!usuario) {
      setMensagens([])
      setCarregandoMensagens(false)
      return
    }

    setCarregandoMensagens(true)

    const consulta = query(
      collection(db, 'mensagens'),
      where('destinatarioId', '==', usuario.id),
      orderBy('criadoEm', 'desc')
    )

    const cancelarObservador = onSnapshot(
      consulta,
      (resultado) => {

        const listaMensagens =
          resultado.docs.map((documento) => ({
            id: documento.id,
            ...documento.data()
          }))

        setMensagens(listaMensagens)
        setCarregandoMensagens(false)
      },
      (erro) => {

        console.error(
          'Erro ao carregar mensagens:',
          erro
        )

        setCarregandoMensagens(false)
      }
    )

    return () => cancelarObservador()

  }, [usuario])

  async function adicionarMensagem(mensagem) {

    try {

      await addDoc(
        collection(db, 'mensagens'),
        {
          ...mensagem,
          data: new Date().toLocaleDateString('pt-BR'),
          criadoEm: new Date().toISOString()
        }
      )

    } catch (erro) {

      console.error(
        'Erro ao enviar mensagem:',
        erro
      )

      throw erro
    }
  }

  async function excluirMensagem(id) {

    if (!usuario) {
      return
    }

    try {

      const mensagem = mensagens.find(
        (item) => item.id === id
      )

      if (!mensagem) {
        return
      }

      await deleteDoc(
        doc(db, 'mensagens', id)
      )

    } catch (erro) {

      console.error(
        'Erro ao excluir mensagem:',
        erro
      )

      throw erro
    }
  }

  return (
    <ContatoContext.Provider
      value={{
        mensagens,
        carregandoMensagens,
        adicionarMensagem,
        excluirMensagem
      }}
    >
      {children}
    </ContatoContext.Provider>
  )
}

export function useContatos() {
  return useContext(ContatoContext)
}