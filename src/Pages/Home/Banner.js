import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div className=" hero min-h-screen bg-[url('/src/assets/images/bg.png')] px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src={chair}
            className="min-w-sm lg:max-w-sm rounded-lg shadow-2xl"
            alt="Banner"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
