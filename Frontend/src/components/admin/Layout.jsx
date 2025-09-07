import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <Navbar/>

        {/* Page Content goes here */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
