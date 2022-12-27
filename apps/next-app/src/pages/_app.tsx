import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import 'primereact/resources/themes/mdc-dark-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import 'primeflex/primeflex.css'; //core css

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
