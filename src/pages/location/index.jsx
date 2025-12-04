import React from 'react'
import LocationBar from '../../components/locationBar'
import { MdModeEditOutline } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaCirclePlus } from 'react-icons/fa6'
import CheckoutButtons from '../../components/checkoutButtons'
// import { useSelector } from 'react-redux'

const Location = () => {
    // const cartItems = useSelector(state => state.cartItems.items)
    // console.log(cartItems);
    
    return (
        <div className='py-14'>
            <LocationBar current={"Address"} />
            <div className="body">
                <div className="main-container">
                    <div className="border-b-2 border-dashed relative pb-15">
                        <h1 className="text-[#17183B] font-semibold text-[20px]">Select Address</h1>
                        <div className="grid grid-cols-1 gap-5 sm:p-10 //bg-amber-500">

                            <div className="location bg-[#F6F6F6] p-5 flex flex-col sm:flex-row  gap-4 sm:gap-0 sm:items-center sm:justify-between">

                                <div className='flex gap-4 items-start'>
                                    <input name="location" type="radio" className='mt-2.5 scale-[1.4] sm:scale-[1.9]' />
                                    <div className="flex flex-col font-normal gap-2.5 text-[12px] sm:text-base">

                                        <div className="flex items-center gap-3">
                                            <p className="text-[13px] sm:text-[18px]">2118 Thornridge</p>
                                            <div className="bg-black text-white py-1 px-2 rounded-sm text-[8px] sm:text-[12px]">
                                                <span>HOME</span>
                                            </div>
                                        </div>

                                        <h1>2118 Thornridge Cir. Syracuse, Connecticut 35624</h1>
                                        <h3>(209) 555-0104</h3>
                                    </div>
                                </div>

                                <div className="flex gap-4 text-2xl justify-end">
                                    <button className="cursor-pointer">
                                        <MdModeEditOutline />
                                    </button>
                                    <button className="cursor-pointer">
                                        <AiOutlinePlus className='rotate-45' />
                                    </button>
                                </div>
                            </div>

                            <div className="location bg-[#F6F6F6] p-5 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center sm:justify-between">

                                <div className='flex gap-4 items-start'>
                                    <input name="location" type="radio" className='mt-2.5 scale-[1.4] sm:scale-[1.9]' />
                                    <div className="flex flex-col font-normal gap-2.5 text-[12px] sm:text-base">

                                        <div className="flex items-center gap-3">
                                            <p className="text-[13px] sm:text-[18px]">Head Office</p>
                                            <div className="bg-black text-white py-1 px-2 rounded-sm text-[8px] sm:text-[12px]">
                                                <span>OFFICE</span>
                                            </div>
                                        </div>

                                        <h1>2715 Ash Dr. San Jose, South Dakota 83475</h1>
                                        <h3>(704) 555-0127</h3>
                                    </div>
                                </div>

                                <div className="flex gap-4 text-2xl justify-end">
                                    <button className="cursor-pointer">
                                        <MdModeEditOutline />
                                    </button>
                                    <button className="cursor-pointer">
                                        <AiOutlinePlus className='rotate-45' />
                                    </button>
                                </div>
                            </div>

                        </div>
                        <button className="text-2xl sm:text-3xl cursor-pointer absolute -bottom-[13px] sm:-bottom-[15.5px] left-[50%] translate-x-[-50%] bg-white">
                            <FaCirclePlus />
                        </button>
                    </div>

                </div>
            </div>
            <CheckoutButtons nextPage={"/shipping"} />
        </div>
    )
}

export default Location
