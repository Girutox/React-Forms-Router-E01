import { useState } from 'react'
import './Login.scss'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    user: '',
    password: ''
  })

  // const [email, setEmail] = useState<string>('')
  // const [emailError, setEmailError] = useState<string>('')

  // const [phone, setPhone] = useState<string>('')
  // const [phoneError, setPhoneError] = useState<string>('')

  // const [user, setUser] = useState<string>('')
  // const [userError, setUserError] = useState<string>('')

  // const [password, setPassword] = useState<string>('')
  // const [passwordError, setPasswordError] = useState<string>('')

  // const emailChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(evt.target.value)
  // }

  // const phoneChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhone(evt.target.value)
  // }

  // const userChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser(evt.target.value)
  // }

  // const passwordChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(evt.target.value)
  // }

  const formChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => {
      return {
        ...prev,
        [evt.target.name]: evt.target.value
      }
    })
  }

  // const isValidForm = () => {
  //   let rpta = true

  //   if (email === '') {
  //     setEmailError('Email is required')
  //     rpta = false
  //   }

  //   if (phone === '') {
  //     setPhoneError('Phone is required')
  //     rpta = false
  //   }

  //   if (user === '') {
  //     setUserError('User is required')
  //     rpta = false
  //   }

  //   if (password === '') {
  //     setPasswordError('Password is required')
  //     rpta = false
  //   }

  //   return rpta
  // }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    // if (!isValidForm()) return

    console.log(form)
  }

  return <div className="login-container">
    <form onSubmit={submitHandler} >
      <div>
        <h3>🔒 Sign Up Form</h3>
      </div>
      <hr />
      <div className='control-container'>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' value={form.email} onChange={formChangeHandler} />
        {/* {emailError} */}
      </div>
      <div className='control-container'>
        <label htmlFor="phone">Phone</label>
        <input type="text" id='phone' name='phone' value={form.phone} onChange={formChangeHandler} />
        {/* {phoneError} */}
      </div>
      <div className='control-container'>
        <label htmlFor="user">User</label>
        <input type="text" id='user' name='user' value={form.user} onChange={formChangeHandler} />
        {/* {userError} */}
      </div>
      <div className='control-container'>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' value={form.password} onChange={formChangeHandler} />
        {/* {passwordError} */}
      </div>
      <button>⤴ Sign Up</button>
    </form>
  </div>
}

export default Login