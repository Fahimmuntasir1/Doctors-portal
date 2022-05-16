import React, { useState } from "react";
import { toast } from "react-toastify";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  if (date === undefined) {
    return toast("You can't set date more times");
  }

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
    </div>
  );
};

export default Appointment;
