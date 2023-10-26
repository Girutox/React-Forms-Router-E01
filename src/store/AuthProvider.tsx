import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const {isLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])
}

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => { },
  logout: () => { }
})

const AuthProvider = ({ children }: { children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // setIsLoggedIn((localStorage.getItem('isLoggedIn')!))
  }, [])

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      login: () => { setIsLoggedIn(true) },
      logout: () => { setIsLoggedIn(false) }
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider