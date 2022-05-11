import React from "react";
import dentalCare from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div>
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row px-10">
          <img
            src={dentalCare}
            class="lg:max-w-sm w-full rounded-lg shadow-2xl lg:mx-20"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
