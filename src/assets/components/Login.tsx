import { useState } from 'react'
import './Login.scss'

const useForm = () => {
  const [form, setForm] = useState({})

  const register = (controlName: string) => {
    const newControl = {
      id: controlName,
      name: controlName,
      value: '',
      error: '',
      onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
          ...prev,
          [controlName]: {
            ...prev[controlName],
            value: evt.target.value,
          }
        }))
      }
    }

    if (!form[controlName]) {
      setForm({
        ...form,
        [controlName]: newControl
      })
    }

    return { ...form[controlName] }
  }

  return { register }
}

const Login = () => {
  const { register } = useForm()

  // const formChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm(prev => {
  //     return {
  //       ...prev,
  //       [evt.target.name]: {
  //         value: evt.target.value,
  //         error: ''
  //       }
  //     }
  //   })
  // }

  // const isValidForm = () => {
  //   let rpta = true

  //   if (form.email.value === '') {
  //     setForm(prev => ({
  //       ...prev,
  //       email: {
  //         ...prev.email,
  //         error: 'Email is required'
  //       }
  //     }))
  //     rpta = false
  //   }

  //   if (form.phone.value === '') {
  //     setForm(prev => ({
  //       ...prev,
  //       phone: {
  //         ...prev.phone,
  //         error: 'Phone is required'
  //       }
  //     }))
  //     rpta = false
  //   }

  //   if (form.user.value === '') {
  //     setForm(prev => ({
  //       ...prev,
  //       user: {
  //         ...prev.user,
  //         error: 'User is required'
  //       }
  //     }))
  //     rpta = false
  //   }

  //   if (form.password.value === '') {
  //     setForm(prev => ({
  //       ...prev,
  //       password: {
  //         ...prev.password,
  //         error: 'Password is required'
  //       }
  //     }))
  //     rpta = false
  //   }

  //   return rpta
  // }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    // if (!isValidForm()) return

    // console.log(form)
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
        {/* {form.email.error && <p className='error'>{form.email.error}</p>} */}
      </div>
      <div className='control-container'>
        <label htmlFor="phone">Phone</label>
        <input type="text" {...register('phone')} />
        {/* {form.phone.error && <p className='error'>{form.phone.error}</p>} */}
      </div>
      <div className='control-container'>
        <label htmlFor="user">User</label>
        <input type="text" {...register('user')} />
        {/* {form.user.error && <p className='error'>{form.user.error}</p>} */}
      </div>
      <div className='control-container'>
        <label htmlFor="password">Password</label>
        <input type="password" {...register('password')} />
        {/* {form.password.error && <p className='error'>{form.password.error}</p>} */}
      </div>
      <button>⤴ Sign Up</button>
    </form>
  </div>
}

export default Login