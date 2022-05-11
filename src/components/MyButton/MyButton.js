import React from "react";

const MyButton = ({ children }) => {
  return (
    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary ">
      { children }
    </button>
  );
};

export default MyButton;
