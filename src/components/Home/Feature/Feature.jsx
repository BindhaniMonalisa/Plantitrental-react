import React from 'react'
import FeatureCard from './FeatureCard';
import imge1 from "../../../assets/features/imge1.avif"
import imge2 from "../../../assets/features/imge2.avif"
import imge3 from "../../../assets/features/imge3.avif"
import imge4 from "../../../assets/features/imge4.avif"
import imge5 from "../../../assets/features/imge5.avif"
import imge6 from "../../../assets/features/imge6.avif"
import imge7 from "../../../assets/features/imge7.avif"
import imge8 from "../../../assets/features/imge8.avif"
import imge9 from "../../../assets/features/imge9.avif"
import imge10 from "../../../assets/features/imge10.avif"
import imge11 from "../../../assets/features/imge11.avif"
import imge12 from "../../../assets/features/imge12.avif"

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
        description:"Check out our package deals, which will save you even more money! If our low pricing wasn't already enough..."
    },
]

const Feature = () => {
  return (
    <div className="bg-primary text-secondary pt-0">
      <div>
        <h1 className="flex justify-center text-[90px] text-green-600 italic">Welcome</h1>
        <p className="flex text-[16px] font-semibold justify-center items-center container pb-10 ">
          We are Utah's best source for rentals of any kind! We are located in American Fork, Utah
          and rent to customers from all over Utah and those visiting our beautiful state for
          recreation and fun. Birthday parties, family reunions, company parties, anniversaries, or
          any get together can be enhanced with one of our rentals. We have everything from photo
          booths to bounce houses, sound systems, inflatable movie screens, shave ice machines,
          cotton candy machines, zorb soccer balls, lasertag and much more. Plan amazing events with
          one of our many items like: dunk tanks, foam machines, cornhole, fog machines, soft serve
          machine, and much more! You can rent all that and more at Plan-it Rentals. Please take
          some time and browse through our website and let us know if you have any questions about
          our rental services. We would be happy to answer them! Call or text us at 801-319-5524
        </p>
      </div>
      <div className="pl-4 pr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {FeatureData.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Feature