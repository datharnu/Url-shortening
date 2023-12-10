import React from "react";
import Illustration from "../assets/images/illustration-working.svg";
import Button from "./Button";
import Button2 from "./Button2";

export default function Hero() {
  return (
    <section className="mx-5 lg:mx-20">

      <div className="text-center lg:flex lg:flex-row-reverse">
        {/* Illustration Image */}
        <div className="relative left-0 bottom-3">
          <img src={Illustration} alt="illustration-image" />
        </div>
        {/* Text Section */}
        <div className="text-center py-10 sm:space-y-5 lg:space-y-2 lg:text-left lg:mr-56 ">
          <h1 className="font-bold text-[45px] lg:text-5xl  leading-none text-vdarkV ">
            More than just shorter links
          </h1>
          <p className="text-[21px] text-grayV lg:text-[15px] lg:mr-24  ">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="lg:hidden font-bold">
            <Button title="Get Started" />
          </div>
          <div className="sm:hidden py-4 text-[13px] font-bold">
            <Button2 title="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}
