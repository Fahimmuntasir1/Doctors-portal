import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { slots, name } = treatment;

  const handleSubmitModal = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(name, slot);
    setTreatment(null);
  };

  const [user] = useAuthState(auth);

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-between  mb-8">
            <h3 className="font-bold text-lg"> {name}</h3>
            <label
              for="booking-modal"
              className="btn btn-sm btn-circle right-2 top-2"
            >
              ✕
            </label>
          </div>
          <form
            onSubmit={handleSubmitModal}
            className="grid grid-cols-1 gap-4 justify-items-center w-full"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter phone here"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
