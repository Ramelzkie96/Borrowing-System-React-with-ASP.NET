import React from "react";
import Card from "../../components/Card";
import { Users, ClipboardList, Package, CalendarCheck } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        Chairman Dashboard
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card title="Users" value="120" icon={Users} color="bg-blue-500" />
        <Card
          title="Total Borrowers"
          value="85"
          icon={ClipboardList}
          color="bg-green-500"
        />
        <Card
          title="Total Items"
          value="230"
          icon={Package}
          color="bg-purple-500"
        />
        <Card
          title="Student Reservations"
          value="45"
          icon={CalendarCheck}
          color="bg-orange-500"
        />
      </div>

      {/* Borrowers Table */}
      <div className="bg-white p-6 shadow-md rounded-2xl border border-gray-100 mt-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-700 mb-3 sm:mb-0">
            All Borrowers
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* Show Entries */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Show</label>
              <select className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option>All</option>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div><br />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-sm">
                <th className="px-4 py-2">Student ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Date Borrow</th>
                <th className="px-4 py-2">Time Span</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2">20231001</td>
                <td className="px-4 py-2">Juan Dela Cruz</td>
                <td className="px-4 py-2">BSIT</td>
                <td className="px-4 py-2">3rd Year</td>
                <td className="px-4 py-2">09123456789</td>
                <td className="px-4 py-2">2025-09-01</td>
                <td className="px-4 py-2">3 days</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                    Borrowed
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2">20231002</td>
                <td className="px-4 py-2">Maria Santos</td>
                <td className="px-4 py-2">BSED</td>
                <td className="px-4 py-2">2nd Year</td>
                <td className="px-4 py-2">09998887777</td>
                <td className="px-4 py-2">2025-09-02</td>
                <td className="px-4 py-2">1 week</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing 1 to 2 of 2 entries</p>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
