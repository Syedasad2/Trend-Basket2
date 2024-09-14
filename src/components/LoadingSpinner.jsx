
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin h-12 w-12 border-4 border-t-4 border-blue-500 border-solid rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;