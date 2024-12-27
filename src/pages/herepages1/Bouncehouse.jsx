import React, { useState } from "react";
import HereNav from "../HereNav";
import Footer2 from "../herepages1/Footer2";

const Bounsehouse = () => {
  const items = [
    {
      title: "How Long Do I Get My Bounce House?",
      content:
        "Our bounce house rentals are for a full day! Pickups are between 9:30am and noon the day of your rental (by appointment), return is anytime before 9am the next business day (our business days are Monday to Saturday). We have normally have an after-hours drop-off option you may use, and we will explain those details in your reminder email and at pickup. It is your responsibility to pass that information along to anyone who may be dropping off for you. Our after-hours procedure changes based on time of year, volume, and other factors - so do not assume it is the same as when you rented a previous time. You may also drop off during our regular business hours (usually 7-9am the day after your rental), BUT THE BOUNCE HOUSE MUST BE RETURNED BEFORE 9AM THE NEXT BUSINESS DAY! Again, additional details on our after-hours accommodations will be explained at pickup.",
    },
    {
      title: "What Is Included In The Rental?",
      content:
        "The published rate includes the bounce house, blower, stakes, and all the training/instruction you'll need!",
    },
    {
      title: "How Do I Make a Reservation?",
      content:
        "Call or text us for availability. Once you are ready to make a reservation, we require a $25 deposit to hold your reservation. That is not an extra $25, that $25 will get subtracted from the total you owe, and the balance will be due at pickup. We also require you read this page thoroughly and digitally sign your name below; acknowledging you have read, understood, and agreed to our policies.",
    },
    {
      title: "What Age Of Kids & How Many?",
      content:
        "Our bounce houses are generally for kids 10 and under. Older kids usually need much larger, heavier, and more expensive bounce houses to keep them entertained. We believe the bounce house rental industry has overlooked the 10 and younger crowd, and has failed to have bounce houses that accommodate this age group at a reasonable price! Most of our bouncers accommodate 8-10 kids at a time, and 500lbs at a time - so they are perfect for birthday parties, family gatherings, and much more!All of our bounce houses with slides help circulate the kids in and out of the bounce house, so a party can easily have more kids than what the bouncer can hold at once!",
    },
    {
      title: "What Vehicle Will I Need?",
      content:
        "All of our bounce houses come in a large duffle bag, and can be carried by 1 or 2 people (Dolphin Dive and Raging Rainforest require 3-4 people). The recommended vehicle is listed next to each bounce house - but please error on the side of bringing too big of a vehicle! Also keep in mind that if your reservation contains other items (i.e. a cotton candy machine) - you will need to plan for additional space.",
    },
    {
      title: "How Do I Set It Up?",
      content:
        "The setup of the bounce house is VERY simple! You will have it up and running in less than 5 minutes. We have a full instructional video that teaches you how to setup the bounce house, and we ask that you (and any others setting up the bounce house) have watched it before attempting to set it up. Please designate an area on grass or indoors, and you'll want to make sure you are close to power (and water if you reserve a wet bouncer) or rent a generator for an extra $25 per day.We do require a tarp to be underneath each bouncer. You may use your own, or rent ours for $5.",
    },
    {
      title: "How Do I Return It?",
      content:
        "As stated above, the bounce house is generally due before 9am the business day following your reservation (see your reminder email for further details). There are steep fees for not having the bounce house back on time, because it will most likely mean that someone else will be waiting or without their bounce house (because of you) - which does not reflect well on our business. The bounce house must be returned CLEAN AND DRY. It is very easy to dry a bounce house (the instructional video provides instructions and tips), and unless Plan-it Rentals is notified of any circumstances preventing you from drying/cleaning a bounce house, we will enforce fees for not doing so.",
    },
    {
        title:"What Is Your Cancellation Policy?",
        content:"You can view our cancellation policy here: Cancellation Policy"
    },
    {
        title:"Do I Need A Generator?",
        content:"You do not need a generator to operate our bounce houses. The blower for the bounce house plugs into a standard 110v outlet. You will want to make sure the outlet being used is not powering other devices/appliances - and that it isn't on a circuit that is also supplying power to other things.You will only need a generator if the location you are planning to use does not have power. We rent our generators with our bounce houses for just $40/day."
    },
    {
        title:"How Does It Work Wet?",
        content:"Not all of our bounce houses can be used wet, but they ALL work great dry! If you are using one of our designated wet bouncers with water, the water tubing on the bounce house connects to a standard water hose."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {/* Navigation bar section */}
      <HereNav />

      {/* Main body section */}
      <div className="w-full p-20 bg-white">
        <h2 className="text-center mt-9 p-10 text-secondary tracking-[0.1em] text-[25px] ">
        Bounce House FAQ
        </h2>

        <div className="bg-gray-100 bg-opacity-60 rounded-lg shadow-lg p-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-400 last:border-b-0 mb-4"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left flex justify-between items-center p-2 text-green-500 text-[17px] font-semibold focus:outline-none tracking-[0.1em] bg-transparent"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-opacity-80 text-secondary rounded-b-lg space-y-3 text-[14px] text-justify">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer section */}
      <Footer2/>
    </>
  );
};

export default Bounsehouse;
