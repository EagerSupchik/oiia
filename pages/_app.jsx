import { Navigation } from '@/components/Navigation';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
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
