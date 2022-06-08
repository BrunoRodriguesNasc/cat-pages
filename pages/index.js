import { useContext } from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import UserContext from '../auth';
import Swal from 'sweetalert2';

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { Login } = useContext(UserContext);

  const onSubmit = async ({ login, password }) => {
    const response = await Login(login, password);
    if (response) return router.push('/home')

    Swal.fire({
      icon: 'error',
      title: 'Ops!',
      text: 'Seus dados estão incorretos'
    })
  }

  return (
    <section className='container'>
      <div>
        <h1>Catbook</h1>
        <div className='signIn'>
          <h3>Log in to your account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor='input-username'>Username</label>
              <input id='input-username' data-cy="username" autoComplete='username' className='input-login' {...register('login', { required: true })} placeholder='Email or name' maxLength='40'></input>
              {errors.login && <span className='error-login'>This field is required</span>}
            </div>
            <div>
              <label htmlFor='input-password'>Password</label>
              <input id='input-password' data-cy="password" autoComplete='current-password' className='input-password' {...register('password', { required: true })} placeholder='Password' type='password'></input>
              {errors.password && <span className='error-password'>This field is required</span>}
            </div>
            <button className='button-submit' data-cy="button-submit" type='submit'>Sign in</button>
          </form>
          <div className='to-signUp'>Don&lsquo;t have an account yet? <a href='#'>Join to Catbook</a></div>
        </div>
      </div>
      <div className='image'></div>
    </section>
  )
}
