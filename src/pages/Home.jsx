import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import Feature from '../components/Home/Feature/Feature'
import AboutUs from '../components/Home/About/AboutUs'
import ContactForm from '../components/Home/Contact/Contact'
import Footer from '../components/Home/Footer/Footer'
import Location from '../components/Home/Location/Location'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Feature/>
    <AboutUs/>
    <ContactForm/>
    <Footer/>
    <Location/>
    </>
  )
}

export default Home