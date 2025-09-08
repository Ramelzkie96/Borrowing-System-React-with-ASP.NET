import React from "react";

const Card = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="flex items-center justify-between p-5 bg-white shadow-md rounded-2xl border border-gray-100">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div
        className={`p-3 rounded-full text-white ${color}`}
      >
        <Icon size={24} />
      </div>
    </div>
  );
};

export default Card;
