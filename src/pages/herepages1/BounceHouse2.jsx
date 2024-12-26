import React from 'react'
import ChooseForm from './chooseform'
import HereNav from '../HereNav'
import Footer2 from './Footer2'
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

const BounceHouse2 = () => {
     const imgdata = [
        {
          img: imge1,
          title: "Play Balls",
          price:
            "$3/day",
        },
        {
          img: imge2,
          title: "Extension Card(50ft)",
          price:
            "$5/day",
        },
        {
          img: imge3,
          title: "Pouncing Puppy",
          price:
            "$40/day",
        },
        {
          img: imge4,
          title: "Super Star",
          price:
            "$40/day",
        },
        {
          img: imge5,
          title: "Hoppin Hippo",
          price:
            "$3/day",
        },
        {
          img: imge6,
          title: "Tiny Toad",
          price:
            "$40/day",
        },
        {
          img: imge7,
          title: "Magical Unicorn",
          price:
            "$30/day",
        },
        {
          img: imge8,
          title: "Animal Ark",
          price:"$40/day, $50 Fri or Sat",
        },
        {
          img: imge9,
          title: "Mini Monster",
          price:"$40/days, $50 Friday or Sat",
        },
        {
          img: imge10,
          title: "Ballon Bounce",
          price:"$40/days, $50 Friday or Sat",
        },
        {
          img: imge11,
          title: "Bouncing Beauty",
          price:"$50/days, $60 Fri or Sat",
        },
        {
          img: imge12,
          title: "Misty Mermaid",
          price:"$60/days, $75 Fri or Sat",
        },
        {
          img: imge12,
          title: "Busy Bee",
          price:"$60/days, $65 Fri or Sat",
        },
        {
          img: imge12,
          title: "Jungle Jump",
          price:"$60/days, $70 Fri or Sat",
        },
      ];
  return (
    <>
    <HereNav/>
    <ChooseForm/>
    <div className='bg-white p-10'>
        <div className="container p-3">
            <h1 className='text-secondary text-center p-3 text-[34px]'>Bounce Houses</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {imgdata.map(({ img, title,price}, index) => (
          <div
            key={index}
            className="transition-all duration-500 bg-white border border-solid border-gray-300 shadow-red-xl"
          >
            <div className="p-4 text-center">
              <h1 className="text-lg font-medium text-tertiary">
                {title}
              </h1>
              <p className="text-[13px] text-secondary">
                {price}
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src={img}
                alt={title}
                className="mx-auto h-[220px] w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
        </div>
    <div className="mx-auto text-secondary font-medium space-y-4 text-[13px]">
        <p>At Plan-it Rentals, we bring the fun and excitement of bounce houses right to your doorstep! Are you planning a birthday party, a family gathering, or a community event? Look no further! Our extensive range of bounce house rentals is designed to add that extra zing to your celebrations.</p>
        <p>We believe that every occasion should be a memorable one. That's why we offer a variety of bounce houses to suit every theme and age group. From vibrant, colorful designs to themed bounce houses that spark imagination, we ensure that you find the perfect fit for your event. Our bounce houses are not just fun; they are also safe and clean, ensuring a worry-free experience for both you and your guests.</p>
        <p>What sets us apart? Our commitment to your satisfaction. We understand that planning an event can be stressful, which is why we strive to make the bounce house rental process as seamless as possible. We pride ourselves on our service and reliability, ensuring that your bounce house is ready to go when your guests arrive.</p>
        <p>Moreover, when you choose Plan-it Rentals for your bounce house needs, you're choosing quality and affordability. We offer competitive pricing without compromising on the quality of our products or services. This commitment to value has earned us a loyal customer base, with many clients returning to us for all their event needs.</p>
        <p>Our clients often tell us how much our bounce houses have added to their events, turning ordinary gatherings into extraordinary ones. They appreciate the joy and laughter these playful structures bring to both children and adults alike. It’s not just about the bounce houses; it's about the memories created around them.</p>
        <p>Whether you're looking for a classic bounce house or something more unique, Plan-it Rentals has got you covered. With our hassle-free bounce house rentals, your next event is sure to be a hit. Let us help you make your celebration a bouncing success!</p>
    </div>
    </div>
    <Footer2/>
    </>
  )
}

export default BounceHouse2