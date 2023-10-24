import './App.css'
// import Login from './components/Login'
import SignUp from './components/SignUp'

import { Route, Routes, Outlet, Link, NavLink, useParams, useOutletContext, useNavigate, NavLinkProps } from 'react-router-dom'

const Home = () => {
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
              <NavLink className={({ isActive })  => {
                return  isActive ? 'custom-active' : ''
              }} to="/home/contacts">Contacts</NavLink>
            </li>
            <li>
              {/* <a href="/home/aboutus">About Us</a> */}
              {/* <Link to="/home/aboutus">About Us</Link> */}
              <NavLink className={({ isActive }) => {
                return  isActive ? 'custom-active' : ''
              }} to="/home/aboutus">About Us</NavLink>
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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<Home />}>
          <Route index element={<h3>Main content for HOME!!!!!!</h3>} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='aboutus' element={<AboutUs />}>
            <Route path=':vipPerson' element={<VIPPersonInfo />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
