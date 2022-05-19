import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Booking from "./Booking";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Spinner from "../Sheared/Spinner";

const AvailableAppointment = ({ date }) => {
  // const [bookings, setBookings] = useState([]);
  // const [treatment, setTreatment] = useState(null);
  // const formattedDate = format(date, "PP");
  // console.log(formattedDate);

  // const {
  //   isLoading,
  //   refetch,
  //   data: bookings,
  // } = useQuery(["available", formattedDate], () =>
  //   fetch(` http://localhost:5000/available?date=${formattedDate}`).then((res) =>
  //     res.json()
  //   )
  // );
  // if (isLoading) {
  //   return <Spinner />;
  // }

  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(` http://localhost:5000/available?date=${formattedDate}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="py-10">
      <h4 className="text-secondary text-center text-xl py-10">
        Available Appointments on : {format(date, "PP")}
      </h4>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 px-10">
        {bookings?.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            setTreatment={setTreatment}
          ></Booking>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
