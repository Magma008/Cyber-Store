import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import Categories from './pages/categories'
import DetailsPage from './pages/details'
import ScrollToTop from './components/scrollToTop'
import Carts from './pages/carts'
import Location from './pages/location'
import Shipping from './pages/shipping'
import Payment from './pages/payment'
import Login from './pages/login'
import SignUp from './pages/signUp'

const App = () => {
  return (
    <div className='relative'>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories/:id' element={<Categories />} />
          <Route path='/categories/:id/:type' element={<DetailsPage />} />
          <Route path='/carts' element={<Carts />} />
          <Route path="/location" element={<Location/>} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
