import Header from "./Header";
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
      </div>
    </>
  );
}

export default Layout;
