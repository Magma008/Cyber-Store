import React from 'react'
import noItems from "../../assets/no-data.gif"
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { togggleWishlist } from '../../features/wishlist/wishSlice'

const Wishlist = () => {
    const wishList = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch()

    return (
        <div className='py-14'>
            <div className="main-container">
                <h1 className="font-semibold text-base sm:text-[25px] md:text-[30px] sm:pl-20">Wishlist</h1>
                {
                    wishList.length ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-2 sm:gap-4 xl:gap-5">

                        {
                            wishList.map((card, index) => (
                                <div key={index} className="card bg-[#F6F6F6] p-2 sm:p-4 md:p-6 flex flex-col gap-2 rounded-[9px] relative">
                                    <div className="liked text-xl sm:text-4xl cursor-pointer text-red-500 absolute top-1 sm:top-3 right-1 sm:right-3">
                                        <button className='cursor-pointer' onClick={() => dispatch(togggleWishlist({ card }))}>
                                            {
                                                wishList.some((item) => item.id == card.id) ? <IoIosHeart /> : <IoIosHeartEmpty />
                                            }
                                        </button>
                                    </div>
                                    <Link to={`/categories/${card?.category}/${card?.id}`}>
                                        <div className="card-image aspect-10/12 flex justify-center">
                                            <img className='w-full h-full object-contain object-center' src={card.image} alt={card.name} />
                                        </div>
                                    </Link>
                                    <div className="card-body flex flex-col gap-2 sm:gap-3 items-center w-full grow">
                                        <h1 className="text-center font-medium text-[10px] sm:text-base">{card.name}</h1>
                                        <h3 className="text-base sm:text-2xl font-semibold">${card.price}</h3>
                                        <Link to={`/categories/${card?.category}/${card?.id}`} className='mt-auto w-full'>
                                            <button className="border-2 border-black bg-black text-white rounded-lg py-1 sm:py-2 px-4 sm:px-8 w-full cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-black hover:shadow-xl hover:text-shadow-lg hover:text-shadow-gray-500 hover:shadow-gray-500 mt-auto text-[13px] sm:text-base">Buy Now</button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div> : <div className="flex items-center justify-center">
                    <img className='w-[50%] sm:w-[30%] 2xl:w-[350px] 2xl:h-[350px] bg-amber-500' src={noItems} alt="❌" />
                </div>
                }
                

            </div>
        </div>
    )
}

export default Wishlist
