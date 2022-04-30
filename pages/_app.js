import PageHeader from '../components/header/PageHeader'
import { useRouter } from 'next/router';
import { UserProvider } from '../auth'
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import theme from '../components/theme';
import '../styles/globals.css'
import '../styles/login.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const isLogin = router.asPath === '/';
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        {!isLogin && <PageHeader />}
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>

  )
}

export default MyApp
