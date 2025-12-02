import React from 'react'
import { cards } from '../../mock/database'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { togggleWishlist } from '../../features/wishlist/wishSlice';

const CategoryCards = () => {
    const dispatch = useDispatch()
    const wishList = useSelector(state => state.wishlist.items)
    return (
        <div className='w-full'>
            <div className="flex flex-col gap-4">

                <div className="flex flex-col sm:flex-row justify-between gap-5 sm:justify-between //bg-fuchsia-400 w-full">
                    <p className="text-[#6C6C6C] font-medium">Selected Products: <span className="text-[20px] text-black">85</span></p>

                    <select className='outline-0 p-3 pr-3 w-[230px] border rounded-md' id="cats">
                        <option value="">By Rating</option>
                        <option value="">By Price</option>
                        <option value="">By Brand</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        cards.map((card, index) => (
                            <div key={index} className="card bg-[#F6F6F6] p-2 sm:p-4 md:p-6 flex flex-col gap-2 rounded-[9px] relative">
                                <div className="liked text-xl sm:text-4xl cursor-pointer text-red-500 absolute top-1 sm:top-3 right-1 sm:right-3">
                                    <button onClick={() => dispatch(togggleWishlist({ card }))} className='cursor-pointer'>
                                        {
                                            wishList.some((item) => item.id == card.id) ? <IoIosHeart /> : <IoIosHeartEmpty />
                                        }
                                    </button>
                                </div>
                                <Link to={`/categories/${card?.category}/${card?.id}`}>
                                    <div className="card-image aspect-10/12 flex justify-center">
                                        <img className='w-full h-full object-contain object-center' src={card?.image} alt={card?.name} />
                                    </div>
                                </Link>
                                <div className="card-body flex flex-col gap-2 sm:gap-3 items-center w-full grow">
                                    <h1 className="text-center font-medium text-[10px] sm:text-base">{card?.name}</h1>
                                    <h3 className="text-base sm:text-2xl font-semibold">${card?.price}</h3>
                                    <Link to={`/categories/${card?.category}/${card?.id}`} className='mt-auto w-full'>
                                        <button className="border-2 border-black bg-black text-white rounded-lg py-1 sm:py-2 px-4 sm:px-8 w-full cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-black hover:shadow-xl hover:text-shadow-lg hover:text-shadow-gray-500 hover:shadow-gray-500 mt-auto text-[13px] sm:text-base">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-center items-center gap-1 sm:gap-2 mt-7">
                    <IoChevronBackSharp className='text-3xl mr-3 cursor-pointer' />
                    <div className="h-8 w-8 bg-black text-white px-3 py-1 rounded-[5px] cursor-pointer">
                        <p>1</p>
                    </div>
                    <div className="h-8 w-8 bg-[#F6F6F6] text-black px-3 py-1 rounded-[5px] cursor-pointer">
                        <p>2</p>
                    </div>
                    <div className="h-8 w-8 bg-[#F6F6F6] text-black px-3 py-1 rounded-[5px] cursor-pointer">
                        <p>3</p>
                    </div>
                    <div>
                        <p className='pt-3'>....</p>
                    </div>
                    <div className="h-8 px-3 bg-[#F6F6F6] text-black py-1 rounded-[5px] cursor-pointer">
                        <p>12</p>
                    </div>

                    <IoChevronForwardSharp className='text-3xl ml-3 cursor-pointer' />
                </div>

            </div>
        </div>
    )
}

export default CategoryCards
