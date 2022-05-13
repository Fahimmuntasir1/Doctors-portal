import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      {/* <button class="btn btn-square loading"></button> */}

      <div class="flex items-center justify-center space-x-2 animate-pulse">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    </div>

    // <div>
    //   <div
    //     style={{ "border-top-color": "transparent" }}
    //     class="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"
    //   ></div>
    // </div>
  );
};

export default Spinner;
