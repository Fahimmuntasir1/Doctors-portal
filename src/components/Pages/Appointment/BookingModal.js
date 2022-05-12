import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
  const { slots, name } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div className="flex items-center justify-between  mb-8">
            <h3 class="font-bold text-lg"> {name}</h3>
            <label
              for="booking-modal"
              class="btn btn-sm btn-circle right-2 top-2"
            >
              ✕
            </label>
          </div>
          <form className="grid grid-cols-1 gap-4 justify-items-center w-full">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            <select class="select select-bordered w-full ">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-accent w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
