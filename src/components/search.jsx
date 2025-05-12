import React from "react";
import PropTypes from "prop-types";

const Search = ({ onSearchChange }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        className="border border-gray-400 rounded-lg p-2 w-72"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
