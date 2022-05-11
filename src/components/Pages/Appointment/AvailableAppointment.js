import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ date }) => {
  const [bookings, setBookings] = useState();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h4 className="text-secondary text-center text-xl">
        Available Appointments on : {format(date, "PP")}
      </h4>
      <div>{bookings.map((booking) => console.log(booking))}</div>
    </div>
  );
};

export default AvailableAppointment;
