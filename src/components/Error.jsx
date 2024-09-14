
import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div className="text-center my-4 py-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
      <p>Error: {message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;