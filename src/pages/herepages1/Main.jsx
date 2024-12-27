import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import Slide1 from "../../assets/main/bounceHouse2.jpg";
import Slide2 from "../../assets/main/bubbleBall.jpg";
import Slide3 from "../../assets/main/cornole.jpg";
import Slide4 from "../../assets/main/cottonCandy.jpg";
import Slide5 from "../../assets/main/dunkTank.jpg";
import Slide6 from "../../assets/main/movieScreen.jpg";
import Slide7 from "../../assets/main/snowShoe.jpg";
import Slide8 from "../../assets/main/vollyball.jpg";
import imge1 from "../../assets/features/imge1.avif";
import imge2 from "../../assets/features/imge2.avif";
import imge3 from "../../assets/features/imge3.avif";
import imge4 from "../../assets/features/imge4.avif";
import imge5 from "../../assets/features/imge5.avif";
import imge6 from "../../assets/features/imge6.avif";
import imge7 from "../../assets/features/imge7.avif";
import imge8 from "../../assets/features/imge8.avif";
import imge9 from "../../assets/features/imge9.avif";
import imge10 from "../../assets/features/imge10.avif";
import imge11 from "../../assets/features/imge11.avif";
import imge12 from "../../assets/features/imge12.avif";
import Footer2 from "./Footer2";
import HereNav from "../HereNav";


const Main = () => {
  const imgdata = [
    {
      img: imge1,
      title: "All Items",
      description:
        "View our full Utah rental inventory.  For easier browsing, choose a specific category.",
    },
    {
      img: imge2,
      title: "Bounce Houses",
      description:
        "The best and easiest party you'll ever plan!  Plan-it Rentals is Utah's #1 rental company.",
    },
    {
      img: imge3,
      title: "Concession Machines",
      description:
        "Food, family, and fun are what Utah events are all about!  With special emphasis on the sugar, of course!",
    },
    {
      img: imge4,
      title: "Games & Activities",
      description:
        "Plan the best family reunion, school fundraiser, or corporate party!",
    },
    {
      img: imge5,
      title: "Wedding",
      description:
        "We have so many items available to make the special day easy and memorable!",
    },
    {
      img: imge6,
      title: "Sound Systems",
      description:
        "Whether it is rocking to the sound of the beat, or speaking memorable words; our sound systems are up task.",
    },
    {
      img: imge7,
      title: "Movie Screens",
      description:
        "Outdoor movies don't have to be a big production.  Simple, easy, and impressive is what we are all about.",
    },
    {
      img: imge8,
      title: "Water Toys",
      description:
        "Summer fun in Utah is what we look forward to all year! Fun in the sun is our forte.",
    },
    {
      img: imge9,
      title: "Equipment",
      description:
        "Items you need to make things happen.  Always the best price found anywhere!",
    },
    {
      img: imge10,
      title: "Food & Beverage",
      description:
        "Come see why our products allow you focus more on the party and less on the work!",
    },
    {
      img: imge11,
      title: "Winter",
      description:
        "Holiday season in Utah is a special time.  Special events call for special items.",
    },
    {
      img: imge12,
      title: "Package Deals",
      description:
        "Check out our package deals, which will save you even more money! If our low pricing wasn't already enough...",
    },
  ];
  const slides = [
    { id: 1, image: Slide1 },
    { id: 2, image: Slide2 },
    { id: 3, image: Slide3 },
    { id: 4, image: Slide4 },
    { id: 5, image: Slide5 },
    { id: 6, image: Slide6 },
    { id: 7, image: Slide7 },
    { id: 8, image: Slide8 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <HereNav />
      <div className="bg-white">
        <div className="container pt-10 sm:pt-20">
          {/* Carousel Section */}
          <div className="pt-10 sm:pt-20">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="min-w-full flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 border-2 border-secondary rounded-full p-2"
              >
                <FiChevronLeft className="text-[30px] sm:text-[40px] text-red-700" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 border-2 border-secondary rounded-full p-2"
              >
                <FiChevronRight className="text-[30px] sm:text-[40px] text-red-700" />
              </button>
            </div>
          </div>
  
          {/* Welcome Section */}
          <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-[20px] sm:text-[24px] font-medium text-tertiary text-center pb-3">
              Welcome
            </h1>
            <p className="text-secondary font-medium text-[14px] sm:text-[16px] text-justify leading-6">
              We are Utah's best source for rentals of any kind! We are located in
              American Fork, Utah and rent to customers from all over Utah and those
              visiting our beautiful state for recreation and fun. Birthday parties,
              family reunions, company parties, anniversaries, or any get together
              can be enhanced with one of our rentals.
            </p>
          </div>
  
          {/* Image Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {imgdata.map(({ img, title }, index) => (
              <div
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-500 bg-white border border-solid border-secondary rounded-lg"
              >
                <div className="p-4 text-center">
                  <h1 className="text-md sm:text-lg font-semibold text-tertiary underline">
                    {title}
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="mx-auto h-[150px] sm:h-[200px] lg:h-[220px] w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
  
          {/* About Section */}
          <div className="p-6">
            <h1 className="text-[20px] sm:text-[24px] font-medium text-tertiary text-center pb-3">
              About Us
            </h1>
            <div className="mx-auto text-secondary font-medium text-[14px] sm:text-[16px] text-justify space-y-4 leading-6">
              <p>
                We are a family-run business in American Fork, Utah that has found a new
                approach to the rental business. Our focus on pricing, product selection,
                and market research puts us above the rest.
              </p>
              <p>
                We firmly believe that our new approach to the rental world will change
                the way you look at planning parties, events, reunions, or trips. With
                our rock-bottom prices, it just makes sense to rent!
              </p>
              <p>
                Too often we hear the horror stories of renting equipment. Our extensive
                product research, inspection, and maintenance will ensure your event is a
                success. We take all of the hassle out of your event by becoming a
                one-stop shop for all your needs. Planning a party in Utah? Call us up and
                see how we can help you out. You can guarantee we have the lowest prices,
                so you don't have to spend countless hours shopping at multiple places!
                If you Plan-it, they will come!
              </p>
            </div>
          </div>
  
          {/* Contact Section */}
          <div className="flex justify-center mb-5 items-center bg-mainbg">
            <div className="pb-10 w-full px-4 sm:px-8 lg:px-20">
              <h2 className="text-center mb-6 text-green-600 tracking-[0.1em] text-[22px] sm:text-[25px] font-semibold">
                Contact Us
              </h2>
              <form className="bg-gray-300 shadow-md p-6 sm:p-8 rounded-lg max-w-lg mx-auto">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-red-500 hover:bg-red-600 transition duration-300 rounded-md"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
          <Footer2 />
        </div>
      </div>
    </>
  );
  
  
  
};

export default Main;
