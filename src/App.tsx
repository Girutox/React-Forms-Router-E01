import './App.css'
// import Login from './components/Login'
import SignUp from './components/SignUp'

import { Route, Routes, Outlet, Link, useOutletContext } from 'react-router-dom'

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
              <Link to="/home/contacts">Contacts</Link>
            </li>
            <li>
              {/* <a href="/home/aboutus">About Us</a> */}
              <Link to="/home/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet context={'asdasd'} />
      </main>
    </>
  )
}

const Contacts = () => {
  return <h2>Contacts page</h2>
}

const AboutUs = () => {
  return (
    <>
      <h2>About Us page</h2>
      <Link to="/home/contacts">Back to Contacts</Link>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<Home />}>
          <Route path='contacts' element={<Contacts />} />
          <Route path='aboutus' element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
