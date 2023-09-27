import { Source_Sans_3 } from "next/font/google";
import "../styles/globals.css";

const source_Sans_3 = Source_Sans_3({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={source_Sans_3.className}>
      <Component {...pageProps} />
    </main>
  );
}
