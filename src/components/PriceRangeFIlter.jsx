import React, { useState } from "react";

const PriceRangeFilter = ({ applyFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApplyFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      applyFilter(min, max);
    }
  };

  return (
    <div className="mt-10">
        <h1 className="text-3xl text-center font-semibold lg:block hidden my-4">Price Range</h1>
      <div className="flex flex-col items-center">
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-20 mb-3"
        />
        <label>Max Price: 2000(only)</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-20 "
        />
        <button onClick={handleApplyFilter} className="mt-3 bg-blue-500 text-white w-64 lg:w-full text-lg font-semibold rounded-xl">Apply</button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
