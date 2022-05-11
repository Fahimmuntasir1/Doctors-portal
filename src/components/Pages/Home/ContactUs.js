import React from "react";
import appointmentImg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div style={{ background: `url(${appointmentImg})` }} className="my-28">
      <div className="py-14">
        <div className="text-center">
          <p className="text-primary font-bold">Contact Us</p>
          <h2 className="text-4xl mb-10 text-white   ">
            Stay connected with us
          </h2>
        </div>
        <form className="flex flex-col lg:w-1/3 mx-5 lg:m-auto">
          <input
            className="rounded-md mb-4 p-2"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="rounded-md mb-4 p-2"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Here"
          />
          <textarea
            className="rounded-md mb-4 p-2"
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Messages Here"
          ></textarea>
          <button className="btn btn-primary w-32 text-white m-auto bg-gradient-to-r from-secondary to-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
