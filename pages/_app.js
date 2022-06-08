import PageHeader from '../components/header/PageHeader';
import { useRouter } from 'next/router';
import { UserProvider } from '../auth';
import '../styles/globals.css';
import '../styles/login.css';
import '../styles/home.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isLogin = router.asPath === '/';
  return (
    <UserProvider>
        {!isLogin && <PageHeader />}
        <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
