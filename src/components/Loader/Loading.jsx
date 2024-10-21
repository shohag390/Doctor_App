import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[90vh]">
      <HashLoader color="#0067ff" />
    </div>
  );
};

export default Loading;
