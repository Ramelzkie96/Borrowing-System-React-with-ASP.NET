import React from "react";
import { Plus, Check, X } from "lucide-react";

const Users = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Users Record</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-3 sm:mt-0">
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
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
        </div>

        {/* Search */}
        <div className="relative mt-3 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white p-6 shadow-md rounded-2xl border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-sm">
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Profile Picture</th>
                <th className="px-4 py-2">Faculty</th>
                <th className="px-4 py-2">IT Chairman</th>
                <th className="px-4 py-2">Edit User</th>
                <th className="px-4 py-2">Active</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2">juan_dela_cruz</td>
                <td className="px-4 py-2">juan@email.com</td>
                <td className="px-4 py-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2 text-green-600">
                  <Check size={18} />
                </td>
                <td className="px-4 py-2 text-red-600">
                  <X size={18} />
                </td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 text-xs bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2">maria_santos</td>
                <td className="px-4 py-2">maria@email.com</td>
                <td className="px-4 py-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2 text-red-600">
                  <X size={18} />
                </td>
                <td className="px-4 py-2 text-green-600">
                  <Check size={18} />
                </td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 text-xs bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-600">
                    Inactive
                  </span>
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

export default Users;
