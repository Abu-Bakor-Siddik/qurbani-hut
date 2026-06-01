import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-5">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export default AuthLayout;
