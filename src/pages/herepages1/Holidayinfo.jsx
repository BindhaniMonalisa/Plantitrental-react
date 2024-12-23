import React, { useState } from "react";
import HereNav from "../HereNav";
import Footer2 from "../herepages1/Footer2";

const Holidayinfo = () => {
  const items = [
    {
      title: "May 25-27 - Memorial Day",
      content:
        "Saturday and Memorial Day (May 27 & May 29) will be a 1.5 day charge for all rental items. Pickup will be Saturday morning (May 27) from 9:30-Noon (by appointment). Drop-off is Tuesday (May 30) before 9:00am. We understand that many people will not need to rent their items for Memorial Day and just want their items for Saturday May 27th. However, because that Monday holiday is a very busy day for us, it is impossible to get everything back from Saturday and have everything tested, cleaned, and inspected to our standard in order to go back out again on Monday morning for the busy holiday. Thus, all pickups are on Saturday and you get the Holiday for just 1/2 price!",
    },
    {
      title: "July 3-4 - Independence Day",
      content:
        "July 3 and July 4th will be a 2 day charge for all rental items. Pickup will be Wednesday morning (July 3) from 9:30-Noon (by appointment). Drop-off is Friday (July 5) before 9:00am. We are very committed to ensuring that our customers have a fully inspected, sanitized and ready to use product for their event. Saturdays in the summer and the 4th of July are days we book out completely. Because the 4th of July falls on a Thursday, it gives us very limited time between the Saturday prior to the 4th and the Saturday after the 4th to have the rental items ready to go. In order to accommodate the volume, many extra and over-time hours must be worked by our staff. We understand not all people will want to pay the 2 day charge, but it is how we have decided to best handle the volume of those 3 busy days stacked in 1 week. We hope our already low pricing will make it worth it for you to utilize our services, but we understand it may not work for everyone.",
    },
    {
      title: "July 23-24 - Pioneer Day",
      content:
        "July 23 and Pioneer Day (July 24) will be a 1 day charge for all rental items. Pickup will be Tuesday morning (July 23) from 9:30-Noon (by appointment). Drop-off is Thursday (July 25) before 9:00am.",
    },
    {
      title: "August 31 -September 2 - Labor Day",
      content:
        "Labor Day will be a 1 day charge for all rental items. Pickup will be Saturday morning (August 31) from 9:30-Noon (by appointment). Drop-off is Tuesday (September 3) before 9:00am.",
    },
    {
      title: "November 27-29 - Thanksgiving",
      content:
        "Thanksgiving will be a normal, 1 day charge for all rented items. However, pickup will be Wednesday (November 27) from 9:30-Noon (by appointment). Drop-off will be Saturday (November 30) before 9:00am.",
    },
    {
      title: "December 23-26 - Christmas Eve & Christmas",
      content:
        "Christmas rentals will be a normal, 1 day charge for all rented items. However, pickup will be Monday (December 23) from 9:30-Noon (by appointment). Drop-off will be Friday (December 27) before 9:00am.",
    },
    {
      title: "December 30 - January 1 - New Year's Eve",
      content:
        "New Year's Eve will be a normal, 1 day charge for all rented items. However, pickup will be Monday (December 30) from 9:30-Noon (by appointment). Drop-off will be Tuesday (January 2) before 9:00am.",
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
        <h2 className="text-center mt-9 p-10 text-secondary tracking-[0.2em] text-[25px]">
          Holiday Pricing & Details
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
                <div className="p-4 bg-opacity-80 text-secondary rounded-b-lg space-y-3 text-[14px]">
                  <p>{item.content}</p>
                  {item.content2 && <p>{item.content2}</p>}
                  {item.content3 && <p>{item.content3}</p>}
                  {item.content4 && <p>{item.content4}</p>}
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

export default Holidayinfo;
