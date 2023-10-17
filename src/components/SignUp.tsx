import { useForm, SubmitHandler } from "react-hook-form"

import './Login.scss'

interface Inputs {
  email: string,
  phone: string,
  user: string,
  password: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  console.log(watch("email"))

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return <div className="login-container">
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <h3>🔒 Sign Up Form (V2)</h3>
      </div>
      <hr />
      <div className='control-container'>
        <label htmlFor="email">Email</label>
        <input type="text" {...register('email', {required: true})} />
        {errors.email && <p className='error'>Email is required</p>}
      </div>
      <div className='control-container'>
        <label htmlFor="phone">Phone</label>
        <input type="text" {...register('phone', {required: true})} />
        {errors.phone && <p className='error'>Phone is required</p>}
      </div>
      <div className='control-container'>
        <label htmlFor="user">User</label>
        <input type="text" {...register('user', {required: true})} />
        {errors.user && <p className='error'>User is required</p>}
      </div>
      <div className='control-container'>
        <label htmlFor="password">Password</label>
        <input type="password" {...register('password', {required: true})} />
        {errors.password && <p className='error'>Password is required</p>}
      </div>
      <button type="submit">⤴ Sign Up</button>
    </form>
  </div>
}

export default SignUp