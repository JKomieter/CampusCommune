import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingMode = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <BeatLoader color="#3B82F6" size={20} />
    </div>
  );
};


export default LoadingMode;