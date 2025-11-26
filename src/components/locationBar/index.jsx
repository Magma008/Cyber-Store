import React from 'react'
import shipping from "../../assets/shipping-icon.png"
import location from "../../assets/location-icon.png"
import payment from "../../assets/payment-icon.png"

const LocationBar = ({ current }) => {
    return (
        <div className='pb-10'>
            <div className="main-container">
                <div className="flex items-center justify-between sm:px-6">

                    <div className={`flex items-center gap-2 ${current == "Address" ? "opacity-100" : "opacity-50"}`}>
                        <img src={location} alt="📍" />
                        <div className="flex flex-col font-medium">
                            <span className="text-[11px] sm:text-[14px] leading-3.5">Step 1</span>
                            <p className="text-[14px] sm:text-[19px]">Address</p>
                        </div>
                    </div>

                    <div className={`flex items-center gap-2 ${current == "Shipping" ? "opacity-100" : "opacity-50"}`}>
                        <img src={shipping} alt="📦" />
                        <div className="flex flex-col font-medium">
                            <span className="text-[11px] sm:text-[14px] leading-3.5">Step 2</span>
                            <p className="text-[14px] sm:text-[19px]">Shipping</p>
                        </div>
                    </div>

                    <div className={`flex items-center gap-2 ${current == "Payment" ? "opacity-100" : "opacity-50"}`}>
                        <img src={payment} alt="💳" />
                        <div className="flex flex-col font-medium">
                            <span className="text-[11px] sm:text-[14px] leading-3.5">Step 3</span>
                            <p className="text-[14px] sm:text-[19px]">Payment</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LocationBar
