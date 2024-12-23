import React, { useState } from "react";
import backgroundImage from "../../../assets/home-background.webp";

const ContactForm = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md p-6">
        <h2 className="font-semibold text-center mb-6 text-secondary uppercase tracking-[0.20rem] text-[50px]">
          Contact Us
        </h2>
        <form className="max-w-md mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
              >
                First name <span className="text-green-500 font-bold">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
              >
                Last name <span className="text-green-500 font-bold">*</span>
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
            >
              Email address <span className="text-green-500 font-bold">*</span>
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
            >
              Phone <span className="text-green-500 font-bold">*</span>
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
            >
              Choose an Option <span className="text-green-500 font-bold">*</span>
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
        </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg font-semibold tracking-[0.07rem]"
            >
              Write a message <span className="text-green-500 font-bold">*</span>
            </label>
          </div> 
          <div className="flex text-center items-center justify-center pt-6">   
          <button
            type="submit"
            className="bg-secondary px-5 py-2 text-white rounded-full border-2 border-green-600 text-sm font-semibold hover:bg-green-600 hover:text-white transition duration-300 mt-[-20px] ml-0 left-[115px]"
          >
            Submit
          </button>
          </div>  
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
