import React, { useState } from 'react'
import logo from "../../assets/cyber.png"
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const cards = useSelector(state => state.wishlist.items)
  // console.log(cards);
  


  return (
    <div className='py-3 z-50 sticky top-0 left-0 bg-white/30 backdrop-blur-md border-b border-b-[#B5B5B5]'>
      <div className="main-container">
        <div className={`flex flex-col ${nav ? "gap-4" : "gap-0"} md:gap-0 transition-all duration-300`}>

          <div className={` transition-all duration-300 //${nav ? "gap-6" : "gap-0"} flex md:items-center md:gap-4 md:justify-around flex-col h-min md:flex-row`}>

            <div className="flex items-center gap-3 w-full md:w-auto justify-between h-full">

              <div className="flex gap-3 items-center">
                <button onClick={() => setNav(prev => !prev)} className='md:hidden text-xl cursor-pointer'>
                  <IoMenu className={`text-3xl transition-all duration-300 ${nav && "rotate-90"}`} />
                </button>
                <Link to="/">
                  <img className='' src={logo} alt="cyber" />
                </Link>
              </div>

              <div className="items-center gap-2 lg:gap-4 text-[20px] lg:text-[24px]  md:hidden flex">
                <Link to="/wishlist" className='relative'>
                  <IoIosHeartEmpty />
                  <div className={`bg-red-500 min-w-[15px] min-h-[15px] absolute p-px -top-2  ${cards.length ? "flex" : "hidden"}  right-[-5px] items-center rounded-full justify-center text-white`}>
                    <p className='text-[7px]'>{cards.length}</p>
                  </div>
                </Link>
                <Link className='relative'>
                  <FiShoppingCart />
                  <div className="bg-red-500 min-w-[15px] min-h-[15px] absolute p-px -top-2 hidden  right-[-5px] flex items-center rounded-full justify-center text-white">
                    <p className='text-[7px]'>145</p>
                  </div>
                </Link>
                <Link className='relative'>
                  <AiOutlineUser />
                  <div className="bg-red-500 min-w-[15px] min-h-[15px] absolute p-px -top-2 hidden  right-[-5px] flex items-center rounded-full justify-center text-white">
                    <p className='text-[7px]'>1456</p>
                  </div>
                </Link>
              </div>

            </div>

            <div className="hidden h-0 md:h-auto md:flex bg-[#F5F5F5]  w-[250px] md:min-w-[300px] px-2.5 py-1.5 rounded items-center gap-1.5">
              <IoSearchOutline />
              <input className='outline-none p-0.5 w-full' type="text" placeholder='Search' />
            </div>

            <ul className={`items-centertransition-all duration-300 md:flex hidden gap-1 lg:gap-6 font-medium text-[15px] lg:text-base text-black`}>
              <li>
                <Link to="/"><p className='text-black cursor-pointer'>Home</p></Link>
              </li>
              <li>
                <p className='cursor-pointer'>About</p>
              </li>
              <li>
                <p className='cursor-pointer'>Contact Us</p>
              </li>
              <li>
                <p className='cursor-pointer'>Blog</p>
              </li>
              <li className='block md:hidden w-full'>
                <div className="flex md:hidden w-full  bg-[#F5F5F5]  md:min-w-[300px] px-2 py-1 rounded items-center gap-1.5">
                  <IoSearchOutline />
                  <input className='w-full  outline-none p-0.5' type="text" placeholder='Search' />
                </div>
              </li>
            </ul>

            <div className="items-center h-0 md:h-auto gap-2 lg:gap-4 text-[20px] lg:text-[24px] hidden  md:flex">
              <Link to="/wishlist" className='relative'>
                <IoIosHeartEmpty />
                <div className={`bg-red-500 min-w-[15px] min-h-[15px] absolute p-px -top-2 ${cards.length ? "flex" : "hidden"}  right-[-5px] items-center rounded-full justify-center text-white`}>
                  <p className='text-[7px]'>{cards.length}</p>
                </div>
              </Link>
              <Link to="/carts" className='relative'>
                <FiShoppingCart />
                <div className="bg-red-500 min-w-[15px] min-h-[15px] absolute p-px -top-2 hidden  right-[-5px] flex items-center rounded-full justify-center text-white">
                  <p className='text-[7px]'>145</p>
                </div>
              </Link>
              <Link to='/signup' className='relative'>
                <AiOutlineUser />
                <div className="bg-red-500 min-w-[15px] min-h-[15px] absolute p-px -top-2 hidden  right-[-5px] flex items-center rounded-full justify-center text-white">
                  <p className='text-[7px]'>1456</p>
                </div>
              </Link>
            </div>

          </div>

          <ul className={` overflow-hidden h-0 ${nav && "h-[180.5px]"} md:hidden md:h-0 transition-all duration-300 flex flex-col gap-0.5 lg:gap-6 font-medium text-[15px] lg:text-base text-gray-500 md:flex-row`}>
            <li className='py-1.5 transition-all duration-300 hover:bg-cyan-300 group hover:text-white cursor-pointer px-1 hover:pl-5 md:px-0 md:hover:pl-0 md:hover:bg-transparent md:hover:text-gray-500'>
              <p className='text-black transition-all duration-300 font-bold md:text-black group-hover:text-white'>Home</p>
            </li>
            <li className='py-1.5 transition-all duration-300 hover:bg-cyan-300 hover:text-white cursor-pointer px-1 md:px-0 hover:pl-5 md:hover:px-0 md:hover:pl-0 md:hover:bg-transparent md:hover:text-gray-500'>
              <p>About</p>
            </li>
            <li className='py-1.5 transition-all duration-300 hover:bg-cyan-300 hover:text-white cursor-pointer px-1 hover:pl-5 md:py-0 md:hover:px-0 md:hover:bg-transparent md:hover:text-gray-500'>
              <p>Contact Us</p>
            </li>
            <li className='py-1.5 transition-all duration-300 hover:bg-cyan-300 hover:text-white cursor-pointer px-1 hover:pl-5 md:py-0 md:hover:px-0 md:hover:bg-transparent md:hover:text-gray-500'>
              <p>Blog</p>
            </li>
            <li className='block md:hidden w-full'>
              <div className="flex md:hidden w-full  bg-[#F5F5F5]  md:min-w-[300px] px-2 py-1 rounded items-center gap-1.5">
                <IoSearchOutline />
                <input className='w-full outline-none p-0.5' type="text" placeholder='Search' />
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar
