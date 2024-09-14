
import React from "react";
import PropTypes from "prop-types";

const Search = ({ onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="mx-10 mb-6 flex justify-center">
      <input
        placeholder="Search products..."
        type="search"
        className="w-full max-w-md border-2 border-gray-300 p-4 font-medium rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-transform transform hover:scale-105"
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
