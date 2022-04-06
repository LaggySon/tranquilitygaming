import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>Tranquility Gaming</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap');
        </style>
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
