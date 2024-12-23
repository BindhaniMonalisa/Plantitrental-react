import React, { useState } from "react";
import HereNav from "../HereNav";
import Footer2 from "../herepages1/Footer2";

const Policie = () => {
    const items = [
        {
          title: "Pickup & Drop-off",
          content: "All of our rental items are picked up and dropped off at our location in American Fork by the customer: 896 S Auto Mall Dr, American Fork, UT 84003. We do not offer pickup or delivery services. No refunds or discounts will be offered for a misunderstanding of this information. We make every effort to ensure every customer is aware of this information by taking special care to mention it during every inquiry, posting it in SEVERAL locations on our website, and through the reminder emails we send to every customer. ",
          content2:"We load all customers at pickup (so you don't need to bring help).",
          content3:"We generally have an after-hours drop off location available for our renters to use. This allows our customers to return their items at their convenience before the due day/time. When utilizing the after-hours drop-off, the customer is responsible for unloading the rented items by themselves, and responsibility is still assumed for the rented items until they are properly checked in by a Plan-it Rentals employee during normal business hours. No refunds or discounts will be given for returning rented items early. If you need assistance unloading your items at drop-off, there is always a drop-off window where we are available to assist  (you will just need to come during that window if you need assistance). It is your responsibility to pass the drop-off information along to anyone who may be dropping off for you.  Our after-hours procedure changes based on time of year, volume, and other factors - so do not assume it is the same as when you rented a previous time.",
          content4:"Our pricing is for full day rentals, so our reservation windows should easily cover your event.  Please don't ask for exceptions to our pickup and drop-off times.",
        },
        {
          title: "Renter Requirements",
          content: "All renters must be 18 years of age or older. A valid driver's license is required at pickup. We reserve the right to refuse service to anyone, for any reason. Valid payment must be presented and payment completed before leaving our premise with the rented items. Our rental agreement must also be completed before departing.",
        },
        {
          title: "Transportation Requirements",
          content: "The customer is responsible for the transportation of the rented items. Adequate space should be allocated for each reserved item. Plan-it Rentals can recommend the space/vehicle needed, and our website also provides the recommended vehicle size for each item. However, we don't know every vehicle or what else might be in the vehicle; so it is the customer's responsibility to arrive with enough cargo space.",
          content2:"No refunds or discounts will be given for items that are unable to be transported due to inadequate cargo space. Plan-it Rentals' employees will help load and secure the rental items, but any damage done to our products during transportation is the responsibility of the customer.",
          content3:"There are times where our employees will not feel comfortable loading items.  Especially when there is limited space, it risks damage to your vehicle or our products. So, we plead and ask that you come with more than enough cargo space for the rented items and you understand that any damage to your vehicle is your responsibility.  We ask you to be understanding when our employees don't feel comfortable loading an item.",
        },
        {
          title: "Cleaning",
          content: "Rented items must be returned clean, dry, and in the same working condition as when they were taken. We reserve the right to charge any fees associated with the cleaning, repair, or replacement of the rented items.",
        },
        {
          title: "Cancellation/Deposit Policy",
          content: "Items are only reserved with a deposit. If a deposit has not been paid, items are available only on a first come, first served basis.",
          content2:"We have the best cancellation policy out there!",
          content3:"Your deposit will be fully refunded if the rented items are able to be rented to someone else. That means, the more notice we are given - the more likely a refund will be issued. That refund will only be issued once the item has been picked up and paid for by the replacement customer. If we are unable to rent the item to another customer, 100% of the deposit can be used as a future credit on any rental, and on any item! An additional deposit must still be collected to reserve another item, and the credit will be used on the remaining balance that is due at pickup.",
          content4:"If a reservation is cancelled after 9:00am the day PRIOR to your pickup day (24 hours before reservation), then 100% of the deposit is forfeited (no refund and no issued credit). In case of inclement weather, the 24hr cancellation policy will be waived and the deposit can be used as a future credit (unless we are able to re-rent the items to another customer, then a full refund will be issued). It is suggested that you arrange an alternate, indoor location for your event in case of weather. Determining what classifies as inclement weather and the waiving of the 24hr cancellation policy is at the discretion of Plan-it Rentals."
        },
        {
          title: "Holiday Pricing & Details",
          content: "Many holidays have different pickup/drop-off times and different pricing may also apply.  Some holidays are our busiest days, so in order to accommodate our volume, staff, and our customers - we have different policies for those days.",
          content2:"For more details on our holidays, pricing, and other information, click here.",
        },
        {
          title:"Summary",
          content:"We truly appreciate you considering Plan-it Rentals for your event. We work VERY hard to ensure each rental is successful, and that every customer is treated with excellence. We firmly believe our pricing, policies, customer service, and products are the best out there, and we hope you will come see that for yourself!",
          content2:"You can be sure we will take full responsibility for our short-comings, and we always error on the side of generosity and making sure our customers are taken care of. We do hope that our customers will also return the favor by being ethical and honest, thus keeping our pricing low and policies and procedures to a minimum.",
        }
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
          Policies
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
      <Footer2 />
    </>
  );
};

export default Policie;
