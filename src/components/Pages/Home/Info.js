import React from "react";
import InfoDetails from "./InfoDetails";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 xs:grid-cols-12 gap-5 px-10">
      <InfoDetails
        details="Click the button to listen on Spotiwhy app."
        background="bg-gradient-to-r from-secondary to-primary"
        title="Opening Hours"
        img={clock}
      />
      <InfoDetails
        details="Brooklyn, NY 10036, United States"
        background="bg-accent"
        title="Visit our location"
        img={marker}
      />
      <InfoDetails
        details="+000 123 456789"
        background="bg-gradient-to-r from-secondary to-primary"
        title="Contact us now"
        img={phone}
      />
    </div>
  );
};

export default Info;
