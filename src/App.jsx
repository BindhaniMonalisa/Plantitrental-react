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

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/items" element={<Rentalitem/>} />
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/policies" element={<Policies/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/article" element={<ArticleCard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App