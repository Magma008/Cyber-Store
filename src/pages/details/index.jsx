import React from 'react'
import { IoCameraReverse, IoChevronDownOutline, IoChevronForward } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import iphone from "../../assets/big-Image.png"
import { MdScreenshot } from 'react-icons/md'
import { HiMiniCpuChip } from 'react-icons/hi2'
import { FiCpu } from 'react-icons/fi'
import { BsFillCameraFill } from 'react-icons/bs'
import { GiBattery75 } from 'react-icons/gi'
import { FaRegStar, FaShop, FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
import { SiTicktick } from 'react-icons/si'
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import { cards } from '../../mock/database'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { togggleWishlist } from '../../features/wishlist/wishSlice'
import { toggleCart } from '../../features/cart/cartSlice'

const DetailsPage = () => {
  const { id, type } = useParams()
  let upp = `${type.split("")[0].toUpperCase()}${type.slice(1)}`
  const dispatch = useDispatch()
  const wishList = useSelector(state => state.wishlist.items)
  const cartItems = useSelector(state => state.cartItems.items)
  let card = cards.find((item) => item.id == id)
  // console.log(wishList);
  



  return (
    <div className='py-14'>
      <div className="main-container">

        <div className="flex flex-col gap-5">

          <div className="flex text-[#A4A4A4] items-center gap-1.5 sm:gap-4 font-medium pb-14">
            <Link to="/">
              <p className="text-[12px] sm:text-base">Home</p>
            </Link>
            <IoChevronForward />
            <p className="text-[12px] sm:text-base">Categories</p>
            <IoChevronForward />
            <p className="text-black text-[12px] sm:text-base">{upp}</p>
          </div>

          <div className="details grid grid-cols-1 lg:grid-cols-2">

            <div className="details-image items-center flex flex-col-reverse sm:flex-row gap-3 md:gap-3 justify-around">
              <div className="h-20 sm:w-[15%] md:w-[10%] lg:w-[15%] xl:w-[15%] lg:h-[600px]  sm:h-[550px] items-center gap-2 overflow-x-auto whitespace-nowrap flex  sm:flex-col md:gap-4">
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s" alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />
                <img className='w-full h-full object-contain object-center' src={iphone} alt="iphone" />

              </div>
              <div className="w-[70%] sm:h-[80%] sm:w-auto p-2 xl:h-[80%]">
                <img className="w-full h-full object-contain object-center" src={card?.image} alt="iphone" />
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4">

              <h1 className="text-[20px] sm:text-[40px] font-bold">{card?.name}</h1>

              <div className="flex items-center gap-4">
                <h2 className="discounted text-[18px] sm:text-[32px] font-medium">${card?.onDiscount ? card?.dsPrice : card?.price}</h2>
                <h2 className={`text-[#A0A0A0] text-[16px] sm:text-[24px] line-through ${card?.onDiscount ? "block" : "hidden"}`}>${card?.price}</h2>
              </div>

              <div className="colors flex items-center gap-4">
                <p className="text-[15px] font-normal">Select color:</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 sm:w-8 h-4 sm:h-8 bg-black rounded-full cursor-pointer"></div>
                  <div className="w-4 sm:w-8 h-4 sm:h-8 bg-[#781DBC] rounded-full cursor-pointer"></div>
                  <div className="w-4 sm:w-8 h-4 sm:h-8 bg-[#E10000] rounded-full cursor-pointer"></div>
                  <div className="w-4 sm:w-8 h-4 sm:h-8 bg-[#E1B000] rounded-full cursor-pointer"></div>
                  <div className="w-4 sm:w-8 h-4 sm:h-8 bg-[#E8E8E8] rounded-full cursor-pointer"></div>
                </div>
              </div>

              <div className="storage grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="border border-[#D5D5D5] py-2.5 px-6 rounded-lg cursor-pointer">
                  <p className="text-[#D5D5D5] ">128GB</p>
                </div>
                <div className="border border-[#D5D5D5] py-2.5 px-6 rounded-lg cursor-pointer">
                  <p className="text-[#D5D5D5] ">256GB</p>
                </div>
                <div className="border border-[#D5D5D5] py-2.5 px-6 rounded-lg cursor-pointer">
                  <p className="text-[#D5D5D5] ">512GB</p>
                </div>
                <div className="border border-black py-2.5 px-6 rounded-lg //cursor-pointer">
                  <p className="text-black ">1TB</p>
                </div>
              </div>

              <div className="characteristics grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">

                <div className="screen-size bg-[#F4F4F4] flex px-4 py-2 rounded-[7px] text-[#4E4E4E] items-center gap-2">
                  <MdScreenshot className='text-2xl' />
                  <div className="flex flex-col gap-1 text-[14px] font-normal leading-4">
                    <p>Screen size</p>
                    <span className="">6.7"</span>
                  </div>
                </div>
                <div className="screen-size bg-[#F4F4F4] flex px-4 py-2 rounded-[7px] text-[#4E4E4E] items-center gap-2">
                  <HiMiniCpuChip className='text-2xl' />
                  <div className="flex flex-col gap-1 text-[14px] font-normal leading-4">
                    <p>CPU</p>
                    <span className="">Apple A16 Bionic</span>
                  </div>
                </div>
                <div className="screen-size bg-[#F4F4F4] flex px-4 py-2 rounded-[7px] text-[#4E4E4E] items-center gap-2">
                  <FiCpu className='text-2xl' />
                  <div className="flex flex-col gap-1 text-[14px] font-normal leading-4">
                    <p>Number of Cores</p>
                    <span className="">6</span>
                  </div>
                </div>
                <div className="screen-size bg-[#F4F4F4] flex px-4 py-2 rounded-[7px] text-[#4E4E4E] items-center gap-2">
                  <BsFillCameraFill className='text-2xl' />
                  <div className="flex flex-col gap-1 text-[14px] font-normal leading-4">
                    <p>Main camera</p>
                    <span className="">48-12-12 MP</span>
                  </div>
                </div>
                <div className="screen-size bg-[#F4F4F4] flex px-4 py-2 rounded-[7px] text-[#4E4E4E] items-center gap-2">
                  <IoCameraReverse className='text-2xl' />
                  <div className="flex flex-col gap-1 text-[14px] font-normal leading-4">
                    <p>Front camera</p>
                    <span className="">12 MP</span>
                  </div>
                </div>
                <div className="screen-size bg-[#F4F4F4] flex px-4 py-2 rounded-[7px] text-[#4E4E4E] items-center gap-2">
                  <GiBattery75 className='text-2xl' />
                  <div className="flex flex-col gap-1 text-[14px] font-normal leading-4">
                    <p>Battery capacity</p>
                    <span className="">4323 mAh</span>
                  </div>
                </div>

              </div>

              <div className="description text-[#6C6C6C]">
                <p className="text-[14px] font-normal">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>
              </div>

              <div className="buttons grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                <button onClick={() => dispatch(togggleWishlist({ card }))} className="py-2 sm:py-4 cursor-pointer border border-black rounded-md transition-all duration-300 hover:shadow-xl hover:shadow-black/50">
                  {
                    wishList.some((item) => item.id == card.id) ? "Remove from " : "Add to "
                  }
                  Wishlist</button>
                <button onClick={() => dispatch(toggleCart(card))} className="py-2 w-full sm:py-4 cursor-pointer border bg-black text-white border-black rounded-md transition-all duration-300 hover:bg-transparent hover:text-black"> 
                {
                  cartItems.some((item) => item.id == card.id) ? "Remove from " : "Add to "
                } Cart</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#F6F6F6] p-4 rounded-[11px] text-[#797979]">
                    <FaTruckFast className='text-xl' />
                  </div>
                  <div className="flex flex-col text-[14px] font-medium">
                    <p className="text-[#717171]">Free Delivery</p>
                    <p className="">1-2 day</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#F6F6F6] p-4 rounded-[11px] text-[#797979]">
                    <FaShop className='text-xl' />
                  </div>
                  <div className="flex flex-col text-[14px] font-medium">
                    <p className="text-[#717171]">In Stock</p>
                    <p className="">Today</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#F6F6F6] p-4 rounded-[11px] text-[#797979]">
                    <SiTicktick className='text-xl' />
                  </div>
                  <div className="flex flex-col text-[14px] font-medium">
                    <p className="text-[#717171]">Guaranteed</p>
                    <p className="">1 year</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="item-description bg-[#FAFAFA] py-10">
        <div className="main-container">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-lg">
            <div className="flex flex-col gap-6">

              <div className="flex items-start font-medium">
                <h3 className="text-[24px]">Details</h3>
              </div>

              <p className="text-[14px] text-[#9D9D9D]">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>

              <div className="flex flex-col gap-10">

                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] font-medium">Screen</h3>
                  <ul className="flex flex-col gap-8">
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">Screen Diagonal</p>
                      <p className="text-[11px] sm:text-[15px]">6.7"</p>
                    </li>
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">The screen resolution</p>
                      <p className="text-[11px] sm:text-[15px]">2796x1290</p>
                    </li>
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">The screen refresh rate</p>
                      <p className="text-[11px] sm:text-[15px]">120Hz</p>
                    </li>
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">The pixel density</p>
                      <p className="text-[11px] sm:text-[15px]">460 ppi</p>
                    </li>
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">Screen type</p>
                      <p className="text-[11px] sm:text-[15px]">OLED</p>
                    </li>
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">Additionality</p>
                      <div className="flex flex-col items-end">
                        <p className="text-[11px] sm:text-[15px]">Dynamic Island</p>
                        <p className="text-[11px] sm:text-[15px]">Always-On display</p>
                        <p className="text-[11px] sm:text-[15px]">HDR display</p>
                        <p className="text-[11px] sm:text-[15px]">True Tone</p>
                        <p className="text-[11px] sm:text-[15px]">Wide color (P3)</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] font-medium">CPU</h3>
                  <ul className="flex flex-col gap-8">
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">CPU</p>
                      <p className="text-[11px] sm:text-[15px]">A16 Bionic</p>
                    </li>
                    <li className="flex //bg-red-300 justify-between font-normal border-b border-b-[#CDCDCD] pb-2">
                      <p className="text-[12px] sm:text-[16px]">Number of cores</p>
                      <p className="text-[11px] sm:text-[15px]">6</p>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="flex justify-center">
                <button className="font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/50 cursor-pointer border flex items-center text-xl gap-3 border-[#545454] py-3 rounded-sm px-8">
                  <p className='text-[14px]'>View More</p>
                  <IoChevronDownOutline />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="reviews py-10">
        <div className="main-container">
          <div className="flex flex-col gap-6">

            <div className="stars flex flex-col gap-10">
              <h1 className="text-[24px] font-medium">Reviews</h1>
              <div className="flex flex-col sm:flex-row items-center gap-7">

                <div className="w-[20%] items-center flex justify-center">
                  <div className="bg-[#FAFAFA] p-6 rounded-[25px] text-center font-medium gap-1.5 flex flex-col w-fit">
                    <h1 className="text-[32px] md:text-[56px]">4.8</h1>
                    <p className="text-[13px] md:text-[15px] text-[#323232]">of 125 reviews</p>
                    <div className="flex items-center justify-center text-[#FFB547]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />
                    </div>
                  </div>
                </div>

                <div className="flex items-center md:w-[75%] w-full">
                  <ul className="text-[15px] sm:text-[18px] font-medium flex flex-col gap-4 w-[30%] sm:w-[20%]">
                    <li>
                      <p>Excellent</p>
                    </li>
                    <li>
                      <p>Good</p>
                    </li>
                    <li>
                      <p>Average</p>
                    </li>
                    <li>
                      <p>Below Average</p>
                    </li>
                    <li>
                      <p>Poor</p>
                    </li>
                  </ul>
                  <ul className="flex flex-col text-[18px] font-medium w-[80%] gap-5">
                    <li className="flex gap-5">
                      <input type="range" className='w-full bg-amber-500 text-cyan-700 in-range:bg-amber-400' min={0} max={100} value={98} disabled />
                      <p className="text-[16px] text-[#323232]">100</p>
                    </li>
                    <li className="flex gap-5">
                      <input type="range" className='w-full bg-amber-500 text-cyan-700 in-range:bg-amber-400' min={0} max={100} value={55} disabled />
                      <p className="text-[16px] text-[#323232] pl-3.5">11</p>
                    </li>
                    <li className="flex gap-5">
                      <input type="range" className='w-full bg-amber-500 text-cyan-700 in-range:bg-amber-400' min={0} max={100} value={23} disabled />
                      <p className="text-[16px] text-[#323232] pl-3.5">3</p>
                    </li>
                    <li className="flex gap-5">
                      <input type="range" className='w-full bg-amber-500 text-cyan-700 in-range:bg-amber-400' min={0} max={100} value={44} disabled />
                      <p className="text-[16px] text-[#323232] pl-3.5">8</p>
                    </li>
                    <li className="flex gap-5">
                      <input type="range" className='w-full bg-amber-500 text-cyan-700 in-range:bg-amber-400' min={0} max={100} value={10} disabled />
                      <p className="text-[16px] text-[#323232] pl-3.5">1</p>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="leave-comment border border-[#CECECE] rounded-[7px] p-4 pb-0 flex-col flex justify-center">
                <textarea className='w-full outline-0' placeholder='Leave a comment'></textarea>
              </div>
            </div>

            <div className="flex flex-col gap-6">

              <div className="comment flex bg-[#FAFAFA] p-6 rounded-[10px] gap-5 flex-col sm:flex-row">
                <div className="user-image w-14 h-14">
                  <img className='w-full h-full' src={user3} alt="user3" />
                </div>
                <div className="user-info flex flex-col gap-2.5 w-full">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold text-17px]">Grace Carey</h2>
                    <span className="font-medium text-[14px] text-[#7E7E7E]">30 April,2025</span>
                  </div>
                  <div className="flex items-center text-[#FFB547]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <p className="font-medium text-[15px] text-[#7E7E7E]">I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤</p>
                </div>
              </div>

              <div className="comment flex bg-[#FAFAFA] p-6 rounded-[10px] gap-5 flex-col sm:flex-row">
                <div className="user-image w-14 h-14">
                  <img className='w-full h-full' src={user2} alt="user3" />
                </div>
                <div className="user-info flex flex-col gap-2.5 w-full">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold text-17px]">Ronald Richards</h2>
                    <span className="font-medium text-[14px] text-[#7E7E7E]">30 April,2025</span>
                  </div>
                  <div className="flex items-center text-[#FFB547]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <p className="font-medium text-[15px] text-[#7E7E7E]">This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.unky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition!</p>
                </div>
              </div>

              <div className="comment flex bg-[#FAFAFA] p-6 rounded-[10px] gap-5 flex-col sm:flex-row">
                <div className="user-image w-14 h-14">
                  <img className='w-full h-full' src={user1} alt="user3" />
                </div>
                <div className="user-info flex flex-col gap-2.5 w-full">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold text-17px]">Darcy King</h2>
                    <span className="font-medium text-[14px] text-[#7E7E7E]">30 April,2025</span>
                  </div>
                  <div className="flex items-center text-[#FFB547]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <p className="font-medium text-[15px] text-[#7E7E7E]">I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition!</p>
                </div>
              </div>

            </div>

            <div className="flex justify-center">
              <button className="font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/50 cursor-pointer border flex items-center text-xl gap-3 border-[#545454] py-3 rounded-sm px-8">
                <p className='text-[14px]'>View More</p>
                <IoChevronDownOutline />
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="cards py-10">
        <div className="main-container">
          <h1 className="font-medium text-[24px] py-4 pb-8">Related Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {
              cards.slice(0, 5).map((card, i) => (
                <div key={i} className="card bg-[#F6F6F6] p-2 sm:p-4 md:p-6 flex flex-col gap-2 rounded-[9px] relative">
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
        </div>
      </div>

    </div>
  )
}

export default DetailsPage
