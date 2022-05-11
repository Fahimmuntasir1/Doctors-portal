import React from "react";
import Service from "./Service";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: Fluoride,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      img: Cavity,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      img: Whitening,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-24 px-10">
      <h2 className="uppercase text-center text-sm text-primary font-bold">
        our services
      </h2>
      <h2 className="text-3xl text-center mt-3">Services We Provide</h2>
      <div className="grid lg:grid-cols-3 gap-8 px-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
