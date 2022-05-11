import React from "react";
import chair from "../../../assets/images/chair.png";
import background from "../../../assets/images/bg.png";
import MyButton from "../../MyButton/MyButton";

const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="hero " style={myStyle}>
      <div className="hero-content flex-col lg:flex-row-reverse py-32 px-10">
        <img
          src={chair}
          className=" mx-10 lg:w-3/6 rounded-lg shadow-2xl"
          alt=""
        ></img>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            minus quia fugit iure, ex aperiam aliquam reprehenderit omnis minima
            debitis.
          </p>
          <MyButton>Get Start</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
