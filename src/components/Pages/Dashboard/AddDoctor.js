import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
  };
  return (
    <div
      style={{ width: "385px", height: "556px" }}
      className="text-center  m-auto"
    >
      <h2 className="text-2xl  font-semibold uppercase">Add a Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Enter your name",
              },
            })}
            type="name"
            placeholder="Enter Your Name"
            className="input input-bordered"
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.name.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.email.message}
            </span>
          )}
        </div>
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">Specialization</span>
          </label>
          <input
            {...register("specialization", {
              required: {
                value: true,
                message: "specialization is required",
              }
            })}
            type="text"
            placeholder="Doctor's Specialization"
            className="input input-bordered"
          />
          {errors.specialization?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.specialization.message}
            </span>
          )}
        </div>
        <div className="form-control ">
          <button className="btn btn-accent mt-2">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
