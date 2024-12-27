import React from 'react'
import img1 from "../../../assets/aboutUs/about1.avif"
import img2 from "../../../assets/aboutUs/about2.avif"

const AboutUs = () => {
  return (
    <div className="container pt-7 pb-7">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-md">
        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-3">
          <h1 className="font-semibold text-2xl text-green-600 tracking-[0.20rem] text-center p-4">
            About Us
          </h1>
          <div className="text-secondary font-semibold space-y-3 text-[15px] text-justify p-2">
            <p>
              We are a family-run business in American Fork, Utah that has found a new approach to the rental business. Our focus on pricing, product selection, and market research puts us above the rest.
            </p>
            <p>
              We firmly believe that our new approach to the rental world will change the way you look at planning parties, events, reunions, or trips. With our rock-bottom prices, it just makes sense to rent!
            </p>
            <p>
              Too often we hear the horror stories of renting equipment. Our extensive product research, inspection, and maintenance will ensure your event is a success. We take all of the hassle out of your event by becoming a one-stop shop for all your needs. Planning a party in Utah? Call us up and see how we can help you out. You can guarantee we have the lowest prices, so you don't have to spend countless hours shopping at multiple places! If you Plan-it, they will come!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end h-[500px]">
          <img
            src={img1}
            alt="Event image 1"
            className="w-1/2 h-auto shadow-md object-cover"
          />
          <img
            src={img2}
            alt="Event image 2"
            className="w-1/2 h-auto shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs