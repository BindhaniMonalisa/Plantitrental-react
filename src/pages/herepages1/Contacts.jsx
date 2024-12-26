import React from 'react';
import HereNav from '../HereNav';
import Footer2 from './Footer2';


const Contacts = () => {
    return (
        <>
        <HereNav/>
        <div className="flex justify-center mt-19 items-center bg-white">
            <div className="mt-10 pb-10">
            <h2 className="text-center mt-20 p-10 text-green-600 tracking-[0.1em] text-[25px]">
              Contact Us
            </h2>
          <form className="p-20 bg-gray-300 container">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-[500px] px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-[500px] px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-[500px] px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-[500px] px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[500px] py-2 text-white bg-red-500 hover:bg-red-600 transition duration-300"
            >
              SEND
            </button>
          </form>
          </div>
        </div>
        <Footer2/>
        </>
        
      );
}

export default Contacts

