import React from 'react'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='bg-[#211C24] pt-8'>
      <div className="main-container">
        <div className="flex justify-evenly flex-col md:flex-row">
            <div className="flex flex-col text-white gap-3 //bg-fuchsia-300 justify-center">
                <h2 className="font-semibold text-[18px] md:text-[25px] text-[#7A777C] leading-[72px]">Pro.Beyond.</h2>
                <h1 className="font-thin text-[50px] leading-[55px] sm:text-[66px] sm:leading-[70ox] md:text-[96px] md:leading-[100px] md:leading-[72px[">Iphone 14 <span className="font-semibold">Pro</span></h1>
                <h2 className="font-medium text-[15px] md:text-[18px] text-[#909090] //leading-[72px]">Created to change everything for the better. For everyone</h2>
                <button className="bg-transparent border-2 border-white rounded-lg w-fit py-3 px-9 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">Shop Now</button>
            </div>
            <div className="banner-image flex justify-center  //bg-yellow-500">
              <img src={bannerImg} alt="banner" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
