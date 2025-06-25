import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="relative">
      <div className="absolute bg-base-100 z-20 w-full">
        <Header></Header>
      </div>

      <main className="min-h-[calc(100vh-210px)] pt-16">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
