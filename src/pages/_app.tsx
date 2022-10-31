import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
