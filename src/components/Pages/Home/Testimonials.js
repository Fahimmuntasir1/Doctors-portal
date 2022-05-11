import React from "react";
import user1 from "../../../assets/images/people1.png";
import user2 from "../../../assets/images/people2.png";
import user3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const users = [
    {
      _id: 1,
      img: user1,
      name: "Winson Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ",
    },
    {
      _id: 2,
      img: user2,
      name: "Winson Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ",
    },
    {
      _id: 3,
      img: user3,
      name: "Winson Herry",
      country: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ",
    },
  ];
  return (
    <div>
      <div className="flex justify-between py-20 px-5">
        <div className="ml-10">
          <p className="text-primary font-bold">Testimonial</p>
          <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {users.map((user) => (
          <Testimonial key={user._id} user={user}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
