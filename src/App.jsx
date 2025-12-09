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
import Wishlist from './pages/wishlist'
import UserData from './pages/userData'
import Edit from './pages/edit'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='relative'>
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories/:id' element={<Categories />} />
        <Route path='/categories/:type/:id' element={<DetailsPage />} />
        <Route path='/carts' element={<Carts />} />
        <Route path="/location" element={<Location />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/user' element={<UserData />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
