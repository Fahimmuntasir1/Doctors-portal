import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      {/* <button className="btn btn-square loading"></button> */}

      {/* <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div> */}

      <div>
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-16 h-16 border-4 border-sky-400  rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
