import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>{" "}
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
