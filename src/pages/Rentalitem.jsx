import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Home/Footer/Footer'
import Location from '../components/Home/Location/Location'
import Hero from '../components/Home/Hero/Hero'
import FeatureCard from '../components/Home/Feature/FeatureCard';
import imge1 from "../assets/features/imge1.avif"
import imge2 from "../assets/features/imge2.avif"
import imge3 from "../assets/features/imge3.avif"
import imge4 from "../assets/features/imge4.avif"
import imge5 from "../assets/features/imge5.avif"
import imge6 from "../assets/features/imge6.avif"
import imge7 from "../assets/features/imge7.avif"
import imge8 from "../assets/features/imge8.avif"
import imge9 from "../assets/features/imge9.avif"
import imge10 from "../assets/features/imge10.avif"
import imge11 from "../assets/features/imge11.avif"
import imge12 from "../assets/features/imge12.avif"

const FeatureData=[
    {
        img:imge1,
        title:"All Items",
        description:"View our full Utah rental inventory.  For easier browsing, choose a specific category."
    },
    {
        img:imge2,
        title:"Bounce Houses",
        description:"The best and easiest party you'll ever plan!  Plan-it Rentals is Utah's #1 rental company."
    },
    {
        img:imge3,
        title:"Concession Machines",
        description:"Food, family, and fun are what Utah events are all about!  With special emphasis on the sugar, of course!"
    },
    {
        img:imge4,
        title:"Games & Activities",
        description:"Plan the best family reunion, school fundraiser, or corporate party!"
    },
    {
        img:imge5,
        title:"Wedding",
        description:"We have so many items available to make the special day easy and memorable!"
    },
    {
        img:imge6,
        title:"Sound Systems",
        description:"Whether it is rocking to the sound of the beat, or speaking memorable words; our sound systems are up task."
    },
    {
        img:imge7,
        title:"Movie Screens",
        description:"Outdoor movies don't have to be a big production.  Simple, easy, and impressive is what we are all about."
    },
    {
        img:imge8,
        title:"Water Toys",
        description:"Summer fun in Utah is what we look forward to all year! Fun in the sun is our forte."
    },
    {
        img:imge9,
        title:"Equipment",
        description:"Items you need to make things happen.  Always the best price found anywhere!"
    },
    {
        img:imge10,
        title:"Food & Beverage",
        description:"Come see why our products allow you focus more on the party and less on the work!"
    },
    {
        img:imge11,
        title:"Winter",
        description:"Holiday season in Utah is a special time.  Special events call for special items."
    },
    {
        img:imge12,
        title:"Package Deals",
        description:"Check out our package deals, which will save you even more money!  If our low pricing wasn't already enough..."
    },
]

const Rentalitem = () => {
  return (
    <>
<Navbar/>
<Hero/>
<div className="bg-primary text-secondary pt-10">
        <div className="pl-4 pr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {FeatureData.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </div>
<Footer/>
<Location/>
    </>
  )
}

export default Rentalitem