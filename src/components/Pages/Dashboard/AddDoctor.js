import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../Sheared/Spinner";

const AddDoctor = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/slot").then((res) => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "7dc84497fea7eb0e0277e037d6463ad6";

  if (isLoading) {
    return <Spinner />;
  }
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });
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
            <span className="label-text">Upload Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Enter your name",
              },
            })}
            type="file"
            placeholder="Enter Your Name"
            className="input input-bordered p-1"
          />
          {errors.image?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              {errors?.image.message}
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
          <select
            {...register("specialization")}
            className="select w-full max-w-xs select-bordered"
          >
            {services.map((service) => (
              <option key={service._id}>{service.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control ">
          <button className="btn btn-accent mt-2">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
