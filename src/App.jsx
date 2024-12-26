import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Location from './pages/Location'
import Policies from './pages/Policies'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Rentalitem from './pages/Rentalitem'
import ArticleCard from './pages/Testing'
import Holidayinfo from './pages/herepages1/Holidayinfo'
import Policie from './pages/herepages1/Policie'
import Bouncehouse from './pages/herepages1/Bouncehouse'
import Contacts from './pages/herepages1/Contacts'
import BounceHouseFaq from './pages/Rental items/BounceHouseFaq'
import Main from './pages/herepages1/main'
import Home2 from './pages/Home2'
import BounceHouse2 from './pages/herepages1/BounceHouse2'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home2" element={<Home2/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/items" element={<Rentalitem/>} />
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/policies" element={<Policies/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/article" element={<ArticleCard/>}/>
      <Route path="/holidayinfo" element={<Holidayinfo/>}/>
      <Route path="/policie" element={<Policie/>}/>
      <Route path="/bounsehouse" element={<Bouncehouse/>}/>
      <Route path="/bounsehouse2" element={<BounceHouse2/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path='/bouncehousefaq' element={<BounceHouseFaq/>}/>
      <Route path='/main' element={<Main/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App