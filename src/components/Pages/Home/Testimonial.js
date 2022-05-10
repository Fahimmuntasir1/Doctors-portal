import React from "react";

const Testimonial = ({ user }) => {
  const { img, name, country, review } = user;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <p className="font-xs">{review}</p>
          <div>
            <div className="flex p-2">
              <div class="avatar">
                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="ml-3">
                <h2>{name} </h2>
                <p>{country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
