import React from 'react'
import img1 from "../assets/BlueGreenStretchO.avif";
import img2 from "../assets/location.png"
import Navbar from '../components/Navbar';

const Location = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className=" flex flex-col gap-4 justify-center items-center pt-10 ">
        <img src={img1} alt=""className='pt-3h-4 mt-20' />
        <p className='text-[44px] font-semibold text-secondary'>Choose Your Location</p>
        <p className='text-[30px] text-secondary font-semibold tracking-[0.03em]'>American Frock, UT | Cedar Park, TX </p>
        <div className="relative">
  <img src={img2} alt="" className="w-full h-full object-cover" />
</div>
        <div className="">
        <p className='p-10 font-semibold text-secondary '>Plan-it Rentals is the best source for rentals of any kind! We are located in American Fork Utah and Cedar Park Texas and rent to customers from all over Utah and the Austin Texas area. Birthday parties, family reunions, company parties, anniversaries, or any get together can be enhanced with one of our rentals. We rent everything from bounce houses, cotton candy machines, spikeball sets, shave ice machines, jumbo connect 4, cornhole rentals, tug of war ropes, popcorn machines, hot dog rollers, 9 square sets, and so much more!  We rent water combo inflatables, jumpy houses, moonwalk bouncers, waterslides, bouncey houses, yard games, concession machines.  You can rent all that and more at Plan-it Rentals. Please take some time and browse through our website and let us know if you have any questions about our rental services. We would be happy to answer them!</p>
        </div>
      </div>   
    </div>
    </>
    
  )
}

export default Location