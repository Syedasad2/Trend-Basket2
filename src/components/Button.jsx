
import React from "react";
import PropTypes from "prop-types";

const Button = ({ onPress, bgColor, title }) => {
  return (
    <button
      onClick={onPress}
      style={{ backgroundColor: bgColor }}
      className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  bgColor: "#007bff", // Default color if none provided
};

export default Button;