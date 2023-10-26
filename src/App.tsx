import './App.css'
// import Login from './components/Login'
import SignUp from './components/SignUp'

import AuthProvider, { useAuth, AuthContext }  from './store/AuthProvider'
import { useContext } from 'react'
import { Route, Routes, Outlet, Link, NavLink as NavLinkRRD, useParams, useOutletContext, useNavigate, Navigate } from 'react-router-dom'

const NavLink = ({ children, to }: { children: React.ReactNode, to: string }) => {
  return (
    <NavLinkRRD className={({ isActive }) => {
      return isActive ? 'custom-active' : ''
    }} to={to}>
      {children}
    </NavLinkRRD>
  )
}

const ProtectedRoute = ({children}: { children: React.ReactNode }) => {
  const {isLoggedIn} = useContext(AuthContext)

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

  return children
}

const Home = () => {
  // useAuth()

  return (
    <>
      <header style={{ border: '1px solid white', padding: '10px' }}>
        <h1>My Web Page!!!</h1>
        <span>Travel around my sites</span>
        <hr />
        <nav>
          <ul>
            <li>
              {/* <a href="/home/contacts">Contacts</a> */}
              {/* <Link to="/home/contacts">Contacts</Link> */}
              <NavLink to="/home/contacts">Contacts</NavLink>
            </li>
            <li>
              {/* <a href="/home/aboutus">About Us</a> */}
              {/* <Link to="/home/aboutus">About Us</Link> */}
              <NavLink to="/home/aboutus">About Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

const Contacts = () => {
  const navigate = useNavigate()

  const goBackHandler = () => {
    navigate(-1)
  }

  return (
    <>
      <h2>Contacts page</h2>
      <button onClick={goBackHandler}>Go Back</button>
    </>
  )
}

const AboutUs = () => {
  const VIPs = ['John', 'Jane', 'James', 'Jenny']

  return (
    <>
      <h2>About Us page</h2>
      <Link to="/home/contacts">Back to Contacts</Link>
      <hr style={{ width: '50%' }} />
      {
        <ul>
          {VIPs.map((name, index) => (
            <li key={index}>
              <Link to={`${name}`}>{name}</Link>
            </li>
          ))}
        </ul>
      }
      <hr style={{ width: '50%' }} />
      <Outlet context={{ VIPs }} />
    </>
  )
}

const VIPPersonInfo = () => {
  const { vipPerson } = useParams()
  const { VIPs } = useOutletContext<{ VIPs: string[] }>()

  return (
    <>
      <h3>Page for a specific VIP person: {vipPerson}</h3>
      <p>
        Total persons on VIP lounge: {VIPs.length}
      </p>
    </>
  )
}

const Videogames = () => {
  // useAuth()

  return <h3>Videogames 🎮</h3>
}

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route index element={<h3>Main content for HOME!!!!!!</h3>} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='aboutus' element={<AboutUs />}>
              <Route path=':vipPerson' element={<VIPPersonInfo />} />
            </Route>
          </Route>
          <Route path='/videogames' element={<Videogames />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
