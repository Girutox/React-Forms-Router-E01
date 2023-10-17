import { InputProps } from '../hooks/useForm.d'
import useForm from '../hooks/useForm'
import './Login.scss'

interface Inputs {
  email: InputProps,
  phone: InputProps,
  user: InputProps,
  password: InputProps
}

const Login = () => {
  const { register, form, isValidForm } = useForm<Inputs>()

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (!isValidForm()) return

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
        <input type="text" {...register('email')} />
        {form.email && <p className='error'>{form.email.error}</p>}
      </div>
      <div className='control-container'>
        <label htmlFor="phone">Phone</label>
        <input type="text" {...register('phone')} />
        {form.phone && <p className='error'>{form.phone.error}</p>}
      </div>
      <div className='control-container'>
        <label htmlFor="user">User</label>
        <input type="text" {...register('user')} />
        {form.user && <p className='error'>{form.user.error}</p>}
      </div>
      <div className='control-container'>
        <label htmlFor="password">Password</label>
        <input type="password" {...register('password')} />
        {form.password && <p className='error'>{form.password.error}</p>}
      </div>
      <button>⤴ Sign Up</button>
    </form>
  </div>
}

export default Login