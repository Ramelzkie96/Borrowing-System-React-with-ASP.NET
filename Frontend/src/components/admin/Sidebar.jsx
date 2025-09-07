import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  PlusSquare,
  ClipboardList,
  CalendarCheck,
  Settings,
  UserCog,
  Lock,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react"; // icons

const Sidebar = () => {
  const location = useLocation();
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);

  // Reusable link style with active highlight
  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-blue-100 hover:bg-blue-600 hover:text-white"
    }`;

  return (
    <aside className="w-70 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-5 shadow-xl">
      {/* Logo / Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-wide">Borrowing System</h2>
        <p className="text-sm text-blue-200 mt-1">Chairman Panel</p>
      </div>

      {/* Nav Links */}
      <nav className="space-y-3">
        <Link to="/admin/dashboard" className={linkClass("/admin/dashboard")}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>

        <Link to="/admin/users" className={linkClass("/admin/users")}>
          <Users size={20} />
          <span>Users</span>
        </Link>

        {/* Manage Items (collapsible) */}
        <button
          onClick={() => setIsManageOpen(!isManageOpen)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-left text-blue-100 hover:bg-blue-600 hover:text-white transition"
        >
          <span className="flex items-center gap-3">
            <Package size={20} />
            Manage Items
          </span>
          {isManageOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        {isManageOpen && (
          <div className="ml-8 space-y-2">
            <Link
              to="/admin/manage-items/add"
              className={linkClass("/admin/manage-items/add")}
            >
              <PlusSquare size={18} />
              <span>Add Item</span>
            </Link>
            <Link
              to="/admin/manage-items/records"
              className={linkClass("/admin/manage-items/records")}
            >
              <ClipboardList size={18} />
              <span>Item Records</span>
            </Link>
          </div>
        )}

        <Link
          to="/admin/borrowed-records"
          className={linkClass("/admin/borrowed-records")}
        >
          <ClipboardList size={20} />
          <span>Borrowed Records</span>
        </Link>

        <Link
          to="/admin/reservations"
          className={linkClass("/admin/reservations")}
        >
          <CalendarCheck size={20} />
          <span>Reservation List</span>
        </Link>

        {/* Manage Accounts (collapsible) */}
        <button
          onClick={() => setIsAccountsOpen(!isAccountsOpen)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-left text-blue-100 hover:bg-blue-600 hover:text-white transition"
        >
          <span className="flex items-center gap-3">
            <Settings size={20} />
            Manage Accounts
          </span>
          {isAccountsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        {isAccountsOpen && (
          <div className="ml-8 space-y-2">
            <Link
              to="/admin/manage-accounts/profile"
              className={linkClass("/admin/manage-accounts/profile")}
            >
              <UserCog size={18} />
              <span>Change Profile</span>
            </Link>
            <Link
              to="/admin/manage-accounts/password"
              className={linkClass("/admin/manage-accounts/password")}
            >
              <Lock size={18} />
              <span>Change Password</span>
            </Link>
          </div>
        )}

        <Link to="/logout" className={linkClass("/logout")}>
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
