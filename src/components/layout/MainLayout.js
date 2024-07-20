import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
