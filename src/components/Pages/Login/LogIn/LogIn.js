import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div class="hero min-h-screen ">
      <div
        style={{ width: "385px", height: "480px" }}
        class="hero-content flex-col"
      >
        <div class="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">
          <div class="card-body ">
            <h1 class="text-center font-semibold">Login</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <Link
                  to="/signup"
                  href="#"
                  class="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div class="form-control ">
              <button class="btn btn-accent">Login</button>
            </div>
            <p className="text-xs text-center">
              New in Doctor's Portal?
              <Link
                to="/signup"
                href="#"
                class="label-text-alt link link-hover mx-3 text-secondary"
              >
                Create new account
              </Link>
            </p>
            <div class="divider text-xs my-2">OR</div>
            <button class="btn btn-outline btn-accent">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
