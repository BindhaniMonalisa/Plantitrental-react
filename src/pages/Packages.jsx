import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Home/Hero/Hero"
import Footer from "../components/Home/Footer/Footer"
import Location from "../components/Home/Location/Location"
import img1 from "../assets/Packages/package1.webp"
import img2 from "../assets/Packages/package2.webp"
import img3 from "../assets/Packages/package3.webp"
import img4 from "../assets/Packages/package4.webp"
import img5 from "../assets/Packages/package5.webp"
import img6 from "../assets/Packages/package6.webp"
import img7 from "../assets/Packages/package7.webp"


const Packages = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 mt-10 mb-7">
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img1} alt="" className='h-auto max-w-full rounded-lg '/>
          <p className='p-3'>Birthday Bargain | $85/day</p>
        </div>
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img2} alt="" className='h-auto max-w-full rounded-lg'/>
          <p className='pt-3'>Bounce & Balls | $108/day</p>
        </div>
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img3} alt="" className='h-auto max-w-full rounded-lg'/>
          <p className='pt-3'>Wet & Wild | $125/day</p>
        </div>
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img4} alt="" className='h-auto max-w-full rounded-lg'/>
          <p className='pt-3'>Movie Madness | $120/day </p>
        </div>
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img5} alt="" className='h-auto max-w-full rounded-lg'/>
          <p className='pt-3'>Splash & Soft Serve | $200/day</p>
        </div>
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img6} alt=""className='h-auto max-w-full rounded-lg' />
          <p className='pt-3'>Cash Cow | $160/day</p>
        </div>
        <div className="text-center text-secondary font-semibold text-[17px] tracking-[0.1em]">
          <img src={img7} alt="" className='h-auto max-w-full rounded-lg'/>
          <p className='pt-3'>Claus & Coco | $75/day</p>
        </div>
      </div>
    </div>
    <Footer/>
    <Location/>
    </>
    
  )
}

export default Packages