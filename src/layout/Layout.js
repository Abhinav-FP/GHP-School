import Footer from "@/pages/Home/Footer";
import Header from "@/pages/Home/Header";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  );
}