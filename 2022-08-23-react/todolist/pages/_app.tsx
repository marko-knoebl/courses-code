import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default MyApp;
