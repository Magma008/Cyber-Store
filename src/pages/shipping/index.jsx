import React from 'react'
import LocationBar from '../../components/locationBar'
import CheckoutButtons from '../../components/checkoutButtons'

const Shipping = () => {
  return (
    <div className="py-14">
      <LocationBar current={"Shipping"} />
      <div className="body py-5">
        <div className="main-container">
          <h1 className="font-semibold text-xl">Shipment Method</h1>
          <div className="grid grid-cols-1 gap-3 sm:px-10 py-6">

            <div className="shipment border boder-[#D1D1D8] rounded-[11px] p-3 sm:p-6 flex gap-3 sm:gap-5 text-[13px] sm:text-base sm:items-center font-medium justify-between text-[#A2A3B1] flex-col sm:flex-row items-center">
              <div className="flex gap-3 sm:gap-5 items-center flex-col text-center sm:flex-row">
                <input type="radio" name='shipment' className='scale-[1.4] sm:scale-[1.9] peer' />
                <h3 className='peer-checked:text-black'>Free</h3>
                <h4 className="font-normal peer-checked:text-[#17183B]">Regulary Shipment</h4>
              </div>
              <p className='text-[#17183B]'>17 Oct, 2023</p>
            </div>

            <div className="shipment border boder-[#D1D1D8] rounded-[11px] p-3 sm:p-6 flex gap-3 sm:gap-5 text-[13px] sm:text-base sm:items-center font-medium justify-between text-[#A2A3B1] flex-col sm:flex-row items-center">
              <div className="flex gap-3 sm:gap-5 items-center flex-col text-center sm:flex-row">
                <input type="radio" name='shipment' className='scale-[1.4] sm:scale-[1.9] peer' />
                <h3 className='peer-checked:text-black'>$8.50</h3>
                <h4 className="font-normal peer-checked:text-[#17183B]">Get your delivery as soon as possible</h4>
              </div>
              <p className='text-[#17183B]'>1 Oct, 2023</p>
            </div>

            <div className="shipment border boder-[#D1D1D8] rounded-[11px] p-3 sm:p-6 flex gap-3 sm:gap-5 text-[13px] sm:text-base sm:items-center font-medium justify-between text-[#A2A3B1] flex-col sm:flex-row items-center">
              <div className="flex gap-3 sm:gap-5 items-center flex-col text-center sm:flex-row">
                <input type="radio" name='shipment' className='scale-[1.4] sm:scale-[1.9] peer' />
                <h3 className='peer-checked:text-black'>Schedule</h3>
                <h4 className="font-normal peer-checked:text-[#17183B]">Pick a date when you want to get your delivery →</h4>
              </div>
              <input type="date" className='outline-0 w-fit' />
            </div>

          </div>
        </div>
      </div>
      <CheckoutButtons nextPage={"/payment"} />
    </div>
  )
}

export default Shipping