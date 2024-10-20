
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="relative flex items-center justify-start h-[2.8rem] w-[2.8rem]">
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-0">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-45">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.875s]"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-90">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.75s]"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-135">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.625s]"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-180">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.5s]"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-225">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.375s]"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-270">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.25s]"></div>
    </div>
    <div className="absolute top-0 left-0 flex items-center justify-start h-full w-full transform rotate-315">
      <div className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 transform scale-0 animate-pulse ease-in-out duration-[0.9s] infinite delay-[-0.125s]"></div>
    </div>
  </div>
  );
};

export default LoadingSpinner;