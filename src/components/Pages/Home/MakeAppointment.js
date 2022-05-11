import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointmentImg from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointmentImg})` }}
      className="flex justify-center items-center mt-52"
    >
      <div className="flex-1 mt-[-100px] hidden lg:block w-full px-5">
        <img src={doctor} alt="doctor" />
      </div>
      <div className="flex-1 mx-10 my-10">
        <p className="text-primary font-bold">Appointment</p>
        <h2 className="text-4xl font-semibold text-white my-4">
          Make an appointment Today
        </h2>
        <p className="text-white my-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary text-white ">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
