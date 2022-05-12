import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div>
      <div className="card lg:max-w-lg m-auto text-primary-content shadow-md">
        <div className="card-body m-auto">
          <h2 className="card-title text-secondary">{name}</h2>
          <div className="text-center">
            <p>
              {slots.length ? (
                <span>{slots[0]}</span>
              ) : (
                <span>Not Available</span>
              )}
            </p>
            <p className="uppercase text-sm my-2">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
            </p>
          </div>
          <div className="card-actions justify-center ">
            <label
              onClick={() => setTreatment(booking)}
              disabled={slots.length === 0}
              for="booking-modal"
              class="btn modal-button btn-primary text-white bg-gradient-to-r from-secondary to-primary "
            >
              book appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
