import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import GoTop from "../components/GoTop/GoTop";

const Layout = () => {
  return (
    <>
      <Header />
      <GoTop />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
