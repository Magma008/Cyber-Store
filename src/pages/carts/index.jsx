import React from 'react'
import iphone from "../../assets/iphone1.png"
// import headset from "../../assets/headset.png"
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Carts = () => {
    return (
        <div className='py-14'>
            <div className="main-container">
                <h1 className="text-[24px] font-semibold pb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 //items-center">

                    <div className="cart-items //bg-amber-500 grid grid-cols-1 p-3 pb-2 ">

                        <div className="minicarts flex items-center gap-2 //bg-amber-400 border-b border-b-[#A3A3A3] pt-6 pb-5 h-fit">
                            <div className="cart-image aspect-10/12 w-[90px] sm:w-[120px] p-1 h-[90px] sm:h-[120px] //bg-red-600">
                                <img src={iphone} alt="iphone" className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="cart-body justify-between w-full font-medium flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 //bg-fuchsia-400">
                                <div className="flex flex-col gap-4 //bg-amber-500 w-full ml-auto">
                                    <p className="sm:text-base text-[12px]">Apple iPhone 14 Pro Max 128Gb Deep Purple fhjgn ghg hgb hb </p>
                                    <p className="sm:text-[14px] text-[10px] font-normal">#25139526913984</p>
                                </div>
                                <div className="counter flex items-center gap-3 px-2 mr-auto">
                                    <button className='cursor-pointer sm:text-xl'>
                                        <FaMinus />
                                    </button>
                                    <div className="border border-[#D9D9D9] py-1 sm:py-2 px-2 text-[13px] sm:px-4 rounded-sm"><p>4223</p></div>
                                    <button className='cursor-pointer sm:text-xl'>
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <h3 className="sm:text-[20px] text-[14px] //bg-blue-500 text-center">$1399</h3>
                                    <button className="sm:text-3xl text-2xl cursor-pointer"><IoClose /></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="order p-3 flex justify-center">
                        <div className="border border-[#EBEBEB] p-5 sm:p-10 rounded-[10px] w-fit sm:min-w-[500px] h-fit">
                            <div className="flex flex-col gap-8">
                                <h2 className="font-bold text-[20px]">Order Summary</h2>

                                <form className="flex flex-col gap-6 py-4">

                                    <div className="flex flex-col gap-2">
                                        <label className='text-[13px] sm:text-[14px] font-medium' htmlFor="nnf">Discount code / Promo code</label>
                                        <input type="text" placeholder='Code' className="outline-0 border border-[#9F9F9F] rounded-[7px] py-1.5 sm:py-3 px-2 sm:px-4 text-[14px]" />
                                    </div>

                                    <div className="flex flex-col gap-2 relative">
                                        <label className='text-[13px] sm:text-[14px] font-medium' htmlFor="nnf">Your bonus card number</label>
                                        <input type="text" placeholder='Enter Card Number' className="outline-0 border border-[#9F9F9F] rounded-[7px] py-1.5 sm:py-3 px-2 sm:px-4 text-[14px]" />
                                        <button className="border cursor-pointer text-[12px] sm:text-base rounded-md py-1 px-2 absolute sm:top-[35px] top-[30.5px] right-1.5">Apply</button>
                                    </div>

                                </form>

                                <div className="subtotal flex flex-col gap-5">
                                    <div className="flex font-medium sm:text-[16px] text-[14px] gap-2 items-center justify-between">
                                        <span>Subtotal</span>
                                        <p>$2347</p>
                                    </div>

                                    <div className="flex font-normal sm:text-[16px] text-[14px] gap-2 items-center justify-between">
                                        <span className='text-[#545454]'>Estimated Tax</span>
                                        <p className='font-medium'>$50</p>
                                    </div>
                                    <div className="flex font-normal sm:text-[16px] text-[14px] gap-2 items-center justify-between">
                                        <span className='text-[#545454]'>Estimated Shipping & Handling</span>
                                        <p className='font-medium'>$29</p>
                                    </div>

                                    <div className="flex font-medium sm:text-[16px] text-[14px] gap-2 items-center justify-between">
                                        <span>Total</span>
                                        <p>$2426</p>
                                    </div>
                                </div>

                                <Link to="/location">
                                    <button className="bg-black w-full text-white py-2 sm:py-4 rounded-md cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-black border boder-2">Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Carts
