import React from "react";
import NavbarComp from "../pages/NavbarComp";
import Footer from "../pages/Footer"

export default function Layout({ children }) {
  return (
    <>
      <NavbarComp />
      {children}   
      <Footer/>    
    </>
  );
}