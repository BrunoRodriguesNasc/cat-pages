import { useForm } from 'react-hook-form';

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => console.log(data)

  return (
    <section className='container'>
      <div>
        <h1>Catbook</h1>
        <div className='signIn'>
          <h3>Log in to your account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor='input-username'>Username</label>
              <input id='input-username' className='input-login' {...register('email', { required: true })} placeholder='Email or name' maxLength='40'></input>
              {errors.email && <span className='error-login'>This field is required</span>}
            </div>
            <div>
              <label htmlFor='input-password'>Password</label>
              <input id='input-password' className='input-password' {...register('password', { required: true })} placeholder='Password' type='password'></input>
              {errors.password && <span className='error-password'>This field is required</span>}
            </div>
            <button className='button-submit' type='submit'>Sign in</button>
          </form>
          <div className='to-signUp'>Don&lsquo;t have an account yet? <a href='#'>Join to Catbook</a></div>
        </div>
      </div>
      <div className='image'></div>
    </section>
  )
}
