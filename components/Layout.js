import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>Tranquility Gaming</title>
        <style>
          @import url(
          {
            "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
          }
          );
        </style>

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="layout">
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
