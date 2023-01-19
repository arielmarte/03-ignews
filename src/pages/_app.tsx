import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import '../styles/global.scss';
import { SessionProvider } from 'next-auth/react'
import type { Session } from "next-auth"

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}: AppProps<{session: Session}>) {
  
  
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
