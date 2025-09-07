import React from "react";
import { Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="mb-6 flex justify-between items-center bg-white shadow px-6 py-3 rounded-lg">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-blue-700">Admin Panel</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-blue-600 transition">
          <Bell size={22} />
          {/* Red dot indicator */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            <User size={20} />
          </div>
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
