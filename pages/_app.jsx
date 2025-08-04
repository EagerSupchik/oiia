import { Navigation } from '@/components/Navigation';
import Head from 'next/head';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <header>
      <Navigation />
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer className="footer">
      OIIA OIIA 2025
    </footer>
  </>
}
