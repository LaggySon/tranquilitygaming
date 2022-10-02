import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Logo from "";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title ? props.title : "Tranquility Gaming"}</title>

        <title>Tranquility Gaming</title>
        <meta name="description" content="" />

        <meta itemProp="name" content="Tranquility Gaming" />
        <meta itemProp="description" content="" />
        <meta
          itemProp="image"
          content="http://tranquility.gg/previewbadge.png"
        />

        <meta property="og:url" content="http://tranquility.gg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tranquility Gaming" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="http://tranquility.gg/previewbadge.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tranquility Gaming" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="http://tranquility.gg/previewbadge.png"
        />
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
