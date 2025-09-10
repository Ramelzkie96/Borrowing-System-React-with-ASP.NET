import React, { useState } from "react";

const AddItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [propertyIds, setPropertyIds] = useState([""]);

  // Handle Quantity Change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);

    // Adjust propertyIds length
    if (value > propertyIds.length) {
      // Add new empty fields
      setPropertyIds([...propertyIds, ...Array(value - propertyIds.length).fill("")]);
    } else if (value < propertyIds.length) {
      // Remove extra fields
      setPropertyIds(propertyIds.slice(0, value));
    }
  };

  // Handle Property ID Change
  const handlePropertyIdChange = (index, value) => {
    const updated = [...propertyIds];
    updated[index] = value;
    setPropertyIds(updated);
  };

  return (
    <div className="flex justify-center pt-10 bg-gray-50 min-h-screen">
      {/* Form Container */}
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-2xl border border-gray-100">
        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Add New Item
        </h1>

        {/* Form */}
        <form className="space-y-5">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Name
            </label>
            <input
              type="text"
              placeholder="Enter item name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Dynamic Property ID Inputs */}
          <div className="space-y-3">
            {propertyIds.map((id, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property ID {index + 1}
                </label>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => handlePropertyIdChange(index, e.target.value)}
                  placeholder={`Enter property ID ${index + 1}`}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
