import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, increaseItem, removeFromCart } from '../../features/cart/cartSlice'
import notFound from "../../assets/no-items.gif"

const Carts = () => {
    const cartItems = useSelector(state => state.cartItems.items)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(cartItems);

    return (
        <div className='py-14'>
            <div className="main-container">
                <h1 className="text-[24px] font-semibold pb-8">Shopping Cart</h1>

                <div className={`grid grid-cols-1 lg:${cartItems.length ? "grid-cols-2" : "grid-cols-1"} gap-3 //items-center`}>

                    <div className="cart-items //bg-amber-500 flex flex-col p-3">
                        {
                            cartItems.length > 0 ? cartItems.map((item, i) => (
                                <div key={i} className="minicarts flex items-center gap-2 //bg-amber-400 border-b border-b-[#A3A3A3] pt-6 pb-5 h-fit //bg-amber-500">
                                    <div className="cart-image aspect-10/12 w-[90px] sm:w-[120px] p-1 h-[90px] sm:h-[120px] //bg-red-600 overflow-hidden">
                                        <img src={item?.image} alt="iphone" className="w-full h-full object-center object-contain" />
                                    </div>
                                    <div className="cart-body justify-between w-full font-medium flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 //bg-fuchsia-400">
                                        <div className="flex flex-col gap-4 //bg-amber-500 w-full ml-auto">
                                            <p className="sm:text-base text-[12px]">{item.name}</p>
                                            <p className="sm:text-[14px] text-[10px] font-normal">#25139526913984</p>
                                        </div>
                                        <div className="counter flex items-center gap-3 px-2 mr-auto">
                                            <button onClick={() => dispatch(decreaseItem(item.id))} className='cursor-pointer sm:text-xl'>
                                                <FaMinus />
                                            </button>
                                            <div className="border border-[#D9D9D9] py-1 sm:py-2 px-2 text-[13px] sm:px-4 rounded-sm"><p>{item?.quantity ? item?.quantity : 0}</p></div>
                                            <button onClick={() => dispatch(increaseItem(item.id))
                                            } className='cursor-pointer sm:text-xl'>
                                                <FaPlus />
                                            </button>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <h3 className="sm:text-[20px] text-[14px] //bg-blue-500 text-center">${item?.totalPrice}</h3>
                                            <button onClick={() => dispatch(removeFromCart(item))} className="sm:text-3xl text-2xl cursor-pointer"><IoClose /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                                :
                                <div className="flex justify-center items-center">
                                    <img src={notFound} alt="There is no data..." className="xl:w-[30%]" />
                                </div>
                        }



                    </div>

                    {
                        cartItems.length ? <div className="order p-3 flex justify-center">
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

                                    <button onClick={() => (cartItems.length ? navigate("/location") : alert("Select a product first. "))} className="bg-black w-full text-white py-2 sm:py-4 rounded-md cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-black border boder-2">Checkout</button>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                    }

                </div>

            </div>
        </div>
    )
}

export default Carts
