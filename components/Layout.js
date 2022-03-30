import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>Tranquility Gaming</title>
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
