import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-primary text-secondary pt-[45px]">
      <div className="container flex flex-row justify-center md:flex-col items-center">
        <div className="pt-20">
          <p className="flex justify-end font-semibold text-[22px] tracking-[0.2em] pl-[10px] pb-[10px]">
            Call Or Text Us ! <span className="underline">801-319-5524</span> 
          </p>
          <h1 className="flex justify-center text-[31px] tracking-[0.15em] font-bold">
            ORDER ONLINE{' '}
            <span className="text-red-600 underline">
              <Link>HERE</Link>
            </span>
          </h1>
          <p className="flex flex-col font-semibold text-[20px] items-center tracking-[0.15em]">
            <span className="text-green-600">
              You are browsing our{' '}
              <span className="text-red-600">American Fork, Utah </span>Location{' '}
            </span>
            <span className="text-green-600 text-2xl">
              Click <Link to="/location" className="text-secondary underline">HERE</Link> to switch
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
