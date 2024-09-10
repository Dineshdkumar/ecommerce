// @ts-ignore
import React from "react";
import Header from "../Main Structure/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Main Structure/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
