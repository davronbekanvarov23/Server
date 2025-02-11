import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
