import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'

import { auth } from '../firebase/firebaseConfig'

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {

    const cancelarObservador = onAuthStateChanged(
      auth,
      (usuarioFirebase) => {

        if (usuarioFirebase) {

          setUsuario({
            id: usuarioFirebase.uid,
            nome:
              usuarioFirebase.displayName ||
              usuarioFirebase.email,
            email: usuarioFirebase.email
          })

        } else {

          setUsuario(null)

        }

        setCarregando(false)
      }
    )

    return () => cancelarObservador()

  }, [])

  async function cadastrar(nome, email, senha) {

    try {

      const credencial =
        await createUserWithEmailAndPassword(
          auth,
          email,
          senha
        )

      await updateProfile(
        credencial.user,
        {
          displayName: nome
        }
      )

      await signOut(auth)

      return {
        sucesso: true
      }

    } catch (erro) {

      console.error('ERRO FIREBASE:', erro)
      console.error('CÓDIGO DO ERRO:', erro.code)
      console.error('MENSAGEM:', erro.message)

      let mensagem =
        `Erro do Firebase: ${erro.code}`

      if (erro.code === 'auth/email-already-in-use') {
        mensagem =
          'Já existe uma conta com este e-mail.'
      }

      if (erro.code === 'auth/invalid-email') {
        mensagem =
          'Digite um e-mail válido.'
      }

      if (erro.code === 'auth/weak-password') {
        mensagem =
          'A senha deve possuir pelo menos 6 caracteres.'
      }

      return {
        sucesso: false,
        mensagem
      }
    }
  }

  async function login(email, senha) {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      )

      return true

    } catch (erro) {

      console.error(
        'Erro ao fazer login:',
        erro
      )

      return false
    }
  }

  async function logout() {

    try {

      await signOut(auth)

    } catch (erro) {

      console.error(
        'Erro ao sair:',
        erro
      )
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        cadastrar,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}