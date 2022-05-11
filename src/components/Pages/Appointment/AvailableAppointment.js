import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Booking from "./Booking";
// import Booking from "./Booking";

const AvailableAppointment = ({ date }) => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="py-10">
      <h4 className="text-secondary text-center text-xl py-10">
        Available Appointments on : {format(date, "PP")}
      </h4>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 px-10">
        {bookings?.map((booking) => (
          <Booking key={booking._id} booking={booking}></Booking>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;