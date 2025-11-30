import React from 'react'
import { discounted } from '../../mock/database'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { togggleWishlist } from '../../features/wishlist/wishSlice'

const Discounts = () => {
    const dispatch = useDispatch()
    const wishList = useSelector(state => state.wishlist.items)
    return (
        <div className='py-14'>
            <div className="main-container">

                <div className="flex items-center justify-start">
                    <h1 className="font-medium text-[20px] sm:text-[24px]">Discounts up to -50%</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-2 sm:gap-4 xl:gap-5">

                    {
                        discounted.map((card, index) => (
                            <div key={index} className="card bg-[#F6F6F6] p-2 sm:p-4 md:p-6 flex flex-col gap-2 rounded-[9px] relative">
                                <div className="liked text-xl sm:text-4xl cursor-pointer text-red-500 absolute top-1 sm:top-3 right-1 sm:right-3">
                                    <button onClick={() => dispatch(togggleWishlist({card}))} className='cursor-pointer'>
                                        {
                                            wishList.some((item) => item.id == card.id) ? <IoIosHeart /> : <IoIosHeartEmpty />
                                        }
                                    </button>
                                </div>
                                <div className="card-image aspect-10/12 flex justify-center">
                                    <img className='w-full h-full object-contain object-center' src={card.image} alt={card.name} />
                                </div>
                                <div className="card-body flex flex-col gap-2 sm:gap-3 items-center w-full grow">
                                    <h1 className="text-center font-medium text-[10px] sm:text-base">{card.name}</h1>
                                    <h3 className="text-base sm:text-2xl font-semibold">${card.price}</h3>
                                    <button className="border-2 border-black bg-black text-white rounded-lg py-1 sm:py-2 px-4 sm:px-8 w-full cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-black hover:shadow-xl hover:text-shadow-lg hover:text-shadow-gray-500 hover:shadow-gray-500 mt-auto text-[13px] sm:text-base">Buy Now</button>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Discounts
