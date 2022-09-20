import { AppProps } from 'next/app';
import Head from 'next/head';
import { RouterProvider } from '../context/router';
import '../styles/global.scss'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Painel de controle</title>
      </Head>
      <main className="app">
        <RouterProvider>
          <Component {...pageProps} />
        </RouterProvider>
      </main>
    </>
  );
}

export default CustomApp;
