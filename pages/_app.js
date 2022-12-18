import Layout from "../components/Layout";
import "../styles/globals.scss";
import "../styles/nprogress.scss";

import { useRouter } from "next/router";
import { useEffect } from "react";

import NProgress from "nprogress";

import { SessionProvider } from "next-auth/react";

function MyApp({ session, Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
