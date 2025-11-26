import React from 'react'

const CheckoutButtons = () => {
  return (
    <div className='py-8'>
      <div className="main-container">
        <div className="flex justify-center sm:justify-end">
            <div className="flex items-center gap-5">
                <button className="px-8 sm:px-12 transition-all hover:shadow-xl hover:text-shadow-md hover:shadow-gray-600 duration-300 border-2 border-black py-1.5 sm:py-3.5 rounded-md cursor-pointer">Back</button>
                <button className="bg-black text-white px-8 sm:px-12 transition-all duration-300 hover:bg-transparent hover:text-black border-2 border-black py-1.5 sm:py-3.5 rounded-md cursor-pointer">Next</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutButtons
