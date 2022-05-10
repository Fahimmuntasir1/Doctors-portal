import React from "react";

const InfoDetails = ({ img, title, background, details }) => {
  return (
    <div
      className={`card lg:card-side bg-accent p-5 text-white shadow-xl ${background}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};

export default InfoDetails;
