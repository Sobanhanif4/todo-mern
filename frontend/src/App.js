import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './components/signup/Signup'
const App = () => {
  return (
    <div>
      <Router>
      <Navbar />

        <Routes>
          <Route exact  path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
