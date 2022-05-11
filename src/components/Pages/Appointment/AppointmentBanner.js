import React from "react";
import chair from "../../../assets/images/chair.png";
import background from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const AppointmentBanner = ({date, setDate}) => {
  

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
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
