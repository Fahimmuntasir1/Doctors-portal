import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <h2 className="text-5xl text-sky-800">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border-r">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
            <li>
              <Link to="/dashboard/history">History</Link>
              <Link to="/dashboard/users">All User</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
