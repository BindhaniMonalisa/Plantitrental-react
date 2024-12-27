import Navbar from '../../components/Navbar'
import Hero from "../../components/Home/Hero/Hero"
import Footer from "../../components/Home/Footer/Footer"
import Location from "../../components/Home/Location/Location"
import img1 from "../../assets/bouncehouse/bounce1.webp"
import img2 from "../../assets/bouncehouse/bounce1.1.webp"
import img3 from "../../assets/bouncehouse/bounce2.webp"
import img4 from "../../assets/bouncehouse/bounce2.2.webp"
import img5 from "../../assets/bouncehouse/bounce3.webp"
import img6 from "../../assets/bouncehouse/bounce3.3.webp"
import img7 from "../../assets/bouncehouse/bounce4.webp"
import img8 from "../../assets/bouncehouse/bounce4.4.webp"
import img9 from "../../assets/bouncehouse/bounce5.webp"
import img10 from "../../assets/bouncehouse/bounce5.5.webp"
import img11 from "../../assets/bouncehouse/bounce6.webp"
import img12 from "../../assets/bouncehouse/bounce6.6.webp"
import img13 from "../../assets/bouncehouse/bounce7.webp"
import img14 from "../../assets/bouncehouse/bounce7.7.webp"
import img15 from "../../assets/bouncehouse/bounce8.webp"
import img16 from "../../assets/bouncehouse/bounce8.8.webp"


const BounceHouseFaq = () => {
  const items = [
    {
      title: "Pouncing Puppy",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img1,
      image2: img2,
      label: "Dry Use Only",
    },
    {
      title: "Super Star",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img3,
      image2: img4,
      label: "Dry Use Only",
    },
    {
      title: "Hoppin' Hippo",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img5,
      image2: img6,
      label: "Dry Use Only",
    },
    {
      title: "Tiny Toad",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img7,
      image2: img8,
      label: "Ball Pit",
    },
    {
      title: "Magical Unicorn",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img9,
      image2: img10,
      label: "Ball Pit",
    },
    {
      title: "Animal Ark",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img11,
      image2: img12,
      label: "Dry Use Only",
    },
    {
      title: "Mini Monster",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img13,
      image2: img14,
      label: "Ball Pit",
    },
    {
      title: "Ballon Bounce",
      price: "$40 Weekday, $50 Fri or Sat",
      image1: img15,
      image2: img16,
      label: "Dry Use only",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="">
        <div className="container mx-auto px-4">
          <div className="mt-6 text-sm leading-7 text-gray-700 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-secondary font-semibold text-[28px] sm:text-[35px] mb-4 p-2 tracking-[0.01em]">
                A New Approach To The Bounce House Industry!
              </h1>
              <p className="text-secondary font-medium text-[14px] sm:text-[16px] text-justify">
                We believe the bounce house industry is not practical for a kids backyard party. Beyond the prices being incredibly expensive, you have 2-4 guys coming into your yard to deliver a massively heavy unit for just a couple hours of use. So we built our whole business around a new, more cost-effective solution! All of our inflatables are custom built for our company. We have unique designs that no other company has, and they are built to be incredibly durable and lightweight for easy transportation! Come pick up a unit in the morning (loaded by our staff) and return the next morning (unloaded by our staff). Setup is a breeze, and we include everything you need with an instructional video. Come see how we've become Utah's top rental company with thousands and thousands of rentals under our belt!
              </p>
            </div>
          </div>
          <div className="mt-5 p-4 border-4 border-tertiary shadow-md flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <ul className="list-disc pl-4 text-[16px] sm:text-[18px] text-secondary font-medium">
              <li>The Best Prices You'll Find</li>
              <li>Lightweight & Easy To Setup</li>
              <li>All Day Rentals (Saturday renters get Sunday for free!)</li>
              <li>Super Fast Pickup & Dropoff</li>
              <li>Setup on your schedule without the worry of late arrivals</li>
              <li>No intrusive setups with strangers in your yard</li>
              <li>Custom & Unique Designs only our company has!</li>
            </ul>
            <div className="text-center mt-4 md:mt-0">
              <div className="inline-block text-tertiary rounded-full pr-6">
                <span className="text-[80px] sm:text-[100px] font-bold">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4 mt-6 text-secondary">
          <h1 className="font-semibold text-[20px] sm:text-[25px] underline">Bounce House FAQ</h1>
          <h2 className="text-[48px] sm:text-[72px] font-bold">Bounce Houses</h2>
          <p className="text-[18px] sm:text-[25px] font-semibold underline text-red-500">2024 Holiday Pricing & Details</p>
          <hr className="border-2 border-tertiary w-10 mx-auto" />
        </div>
        <div className="min-h-screen py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div key={index} className="relative group w-full mx-auto">
                <div className="absolute top-[-7px] left-0 bg-tertiary text-white font-semibold text-sm px-2 py-1 z-10">
                  {item.label}
                </div>
                <div className="relative">
                  <img
                    src={item.image1}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:hidden rounded-lg"
                  />
                  <img
                    src={item.image2}
                    alt={`${item.title} Hover`}
                    className="w-full h-40 object-cover rounded-lg hidden group-hover:block"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-semibold text-[14px] sm:text-[15px] text-secondary">
                    {item.title} | {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Location />
    </>
  );
  
}

export default BounceHouseFaq;
