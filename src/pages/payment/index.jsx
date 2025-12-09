import React from 'react'
import LocationBar from '../../components/locationBar'
import card from "../../assets/card-info.png"
import CheckoutButtons from '../../components/checkoutButtons'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../features/payment/paySlice'

const Payment = () => {
    const cartItems = useSelector(state => state.cartItems.items)
    const cartPrices = cartItems.map((item) => item.totalPrice)
    const subtotal = cartPrices.reduce((acc, val) => acc + val, 0)
    const dispatch = useDispatch()

    return (
        <div className='py-14'>
            <LocationBar current={"Payment"} />
            <div className="body py-7">
                <div className="main-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="summary border flex flex-col gap-3 sm:gap-6 border-[#EBEBEB] p-3 sm:p-6 rounded-[10px]">
                            <h1 className="font-medium text-[17px] sm:text-[20px]">Summary</h1>
                            <div className="grid grid-cols-1 gap-3">

                                {
                                    cartItems.map((cart, i) => {
                                        //cart
                                        return (
                                            <div key={i} className="item bg-[#F6F6F6] flex sm:items-center gap-3 sm:gap-5 rounded-[13px] p-2.5 sm:p-4 text-[11px] sm:text-base font-medium sm:justify-between flex-col items-start sm:flex-row">

                                                <div className="flex items-center gap-2 sm:gap-4">
                                                    <div className="w-[50px] h-[50px]">
                                                        <img src={cart?.image} alt="" className="w-full h-full object-center object-cover" />
                                                    </div>
                                                    <h3>{cart?.name}</h3>
                                                </div>

                                                <h3 className="font-bold text-end w-full sm:text-start sm:w-auto">${cart?.totalPrice}</h3>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-medium text-[10px] sm:text-[14px] text-[#545454]">Address</p>
                                <p className="text-[12px] sm:text-base font-normal">1131 Dusty Townline, Jacksonville, TX 40322</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-medium text-[10px] sm:text-[14px] text-[#545454]">Shipment method</p>
                                <p className="text-[12px] sm:text-base font-normal">Free</p>
                            </div>
                            <div className="flex flex-col gap-4 text-[11px] sm:text-base">
                                <div className="flex font-medium items-center justify-between">
                                    <h4>Subtotal</h4>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="flex font-medium items-center justify-between">
                                    <h4 className='text-[#545454] font-normal'>Estimated Tax</h4>
                                    <span>$50</span>
                                </div>
                                <div className="flex font-medium items-center justify-between">
                                    <h4 className='text-[#545454] font-normal'>Estimated shipping & Handling</h4>
                                    <span>$29</span>
                                </div>
                                <div className="flex font-medium items-center justify-between">
                                    <h4>Total</h4>
                                    <span>${subtotal + 79}</span>
                                </div>
                            </div>
                        </div>

                        <div className="payment sm:p-5 flex flex-col gap-3 sm:gap-6">
                            <h1 className="text-[17px] sm:text-[20px] font-bold">Payment</h1>
                            <img src={card} className='w-fit' alt="card" />
                            <form onSubmit={() => dispatch(getData("Allowed"))} className="flex flex-col gap-4 sm:p-4">
                                <input required className='border boder-[#CECECE] py-1.5 sm:py-3 sm:px-4 px-3 outline-0 rounded-[7px] transition-all duration-300 focus:shadow-xl focus:shadow-gray-400 focus:text-shadow-lg focus:text-shadow-gray-400' type="text" placeholder="Cardholder's name" />
                                <input required className='border boder-[#CECECE] py-1.5 sm:py-3 sm:px-4 px-3 outline-0 rounded-[7px] transition-all duration-300 focus:shadow-xl focus:shadow-gray-400 focus:text-shadow-lg focus:text-shadow-gray-400' maxLength={16} type="number" placeholder="Card Number" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input required className='border boder-[#CECECE] py-1.5 sm:py-3 sm:px-4 px-3 outline-0 rounded-[7px] transition-all duration-300 focus:shadow-xl focus:shadow-gray-400 focus:text-shadow-lg focus:text-shadow-gray-400' maxLength={16} type="number" placeholder="Expiration Date" />
                                    <input  required className='border boder-[#CECECE] py-1.5 sm:py-3 sm:px-4 px-3 outline-0 rounded-[7px] transition-all duration-300 focus:shadow-xl focus:shadow-gray-400 focus:text-shadow-lg focus:text-shadow-gray-400' max={999} type="number" placeholder="CVV" />
                                </div>
                            </form>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className='sm:scale-[1.3]' />
                                <h5 className="text-[text-12px] sm:text-[15px]">Same as billing address</h5>
                            </div>
                            <CheckoutButtons final={"Pay"} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
