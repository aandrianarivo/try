import React from "react";
import Header from "../Nav/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
