import React from 'react'
import cyber from "../../assets/cyber-white.png"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black text-white py-16'>
      <div className="main-container">
        <div className="flex gap-16 md:gap-4 justify-around flex-col md:flex-row">

          <div className="flex flex-col justify-between gap-8">

            <div className="flex flex-col gap-4 items-start">
              <Link to="/">
                <img src={cyber} alt="cyber" />
              </Link>
              <p className='text-[14px]'>We are a residential interior design firm located in <br /> Portland. Our boutique-studio offers more than</p>
            </div>

            <div className="flex items-center gap-6">
              <Link>
                <div className="hover:bg-white/40 p-2 transition-all duration-300 hover:scale-[1.3] hover:rotate-y-360 border-black rounded-full border-2 hover:border-white bg-black">
                  <FaXTwitter />
                </div>
              </Link>
              <Link>
                <div className="hover:bg-white/40 p-2 transition-all duration-300 hover:scale-[1.3] hover:rotate-y-360 border-black rounded-full border-2 hover:border-white bg-black">
                  <FaFacebookF />
                </div>
              </Link>
              <Link>
                <div className="hover:bg-white/40 p-2 transition-all duration-300 hover:scale-[1.3] hover:rotate-y-360 border-black rounded-full border-2 hover:border-white bg-black">
                  <FaTiktok />
                </div>
              </Link>
              <Link>
                <div className="hover:bg-white/40 p-2 transition-all duration-300 hover:scale-[1.3] hover:rotate-y-360 border-black rounded-full border-2 hover:border-white bg-black">
                  <RiInstagramFill />
                </div>
              </Link>

            </div>

          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">Services</h2>
            <ul className="flex flex-col text-[14px] gap-4">
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Bonus Program</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Gift Cards</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Credit and Payment</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Service Contracts</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Non-Cash Account</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Payment</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">Assistance to the buyer</h2>
            <ul className="flex flex-col text-[14px] gap-4">
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Find an order</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Terms of delivery</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Exchange and Return of goods</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Guarantee</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Frequently asked questions</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p className='transition-all duration-300 hover:text-cyan-500'>Terms of use of the site</p>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
