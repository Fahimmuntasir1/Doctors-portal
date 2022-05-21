import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(` http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2>Available Appointment {appointments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map(
              (appointment, index) => (
                console.log(appointment),
                (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.slot}</td>
                    <td>{appointment.treatment}</td>
                    <td>
                      {appointment.price && !appointment.paid && (
                        <Link to={`/dashboard/payment/${appointment}`}>
                          <button className="btn btn-xs btn-success text-white">
                            Pay now!
                          </button>
                        </Link>
                      )}
                      {appointment.paid && (
                        <span className="text-success border-2">Paid</span>
                      )}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
