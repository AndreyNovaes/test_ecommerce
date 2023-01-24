import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider, SessionProviderProps } from 'next-auth/react'

type AppPropsPlusSessionProps = AppProps & SessionProviderProps

export default function App({ Component, pageProps, session }: AppPropsPlusSessionProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
