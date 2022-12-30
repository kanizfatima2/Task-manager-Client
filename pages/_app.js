import AuthProvider from '../AuthProvider/Authprovider'
import Header from '../Component/Navbar/Header'
import '../styles/globals.css';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>

        <Header></Header>

        <Component {...pageProps} />

      </AuthProvider>
    </QueryClientProvider>
  </>
}