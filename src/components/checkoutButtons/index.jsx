import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { deleteFully } from '../../features/cart/cartSlice'

const CheckoutButtons = ({ nextPage, final }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const success = (e) => {
    e.preventDefault()
    if (final) {
      dispatch(deleteFully("Remove"))
      toast.success('Successfully Purchased', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      navigate('/')
    } else {
      navigate(nextPage)
    }
  }

  return (
    <div className='py-8'>
      <div className="main-container">
        <div className="flex justify-center sm:justify-end">
          <div className="flex items-center gap-5">
            <button onClick={() => navigate(-1)} className="px-8 sm:px-12 transition-all hover:shadow-xl hover:text-shadow-md hover:shadow-gray-600 duration-300 border-2 border-black py-1.5 sm:py-3.5 rounded-md cursor-pointer">Back</button>
            <button onClick={(e) => success(e)} className="bg-black text-white px-8 sm:px-12 transition-all duration-300 hover:bg-transparent hover:text-black border-2 border-black py-1.5 sm:py-3.5 rounded-md cursor-pointer">{final || "Next"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutButtons
