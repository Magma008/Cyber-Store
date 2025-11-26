import React from 'react'
import ps5 from "../../assets/ps5.png"
import airpods from "../../assets/headphone.png"
import vision from "../../assets/vision.png"
import mac from "../../assets/half-macbook.png"

const Brands = () => {
    return (
        <div className='max-w-[1800px] mx-auto'>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="flex flex-col">

                    <div className="ps5 flex items-center w-[50%] xl:w-auto justify-between xl:justify-baseline">
                        <img src={ps5} alt="ps5" />
                        <div className="ps5-texts font-medium flex flex-col justify-center p-2">
                            <h1 className="text-[25px] md:text-[49px]">Playstation 5</h1>
                            <p className="text-[14px] md:leading-6 text-[#909090]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="airpods flex bg-[#EDEDED] items-center  gap-6 lg:gap-8 justify-between xl:justify-baseline pr-4">
                            <img src={airpods} alt="airpods" />
                            <div className="ps5-texts flex flex-col ">
                                <h1 className="text-[24px] md:text-[29px] font-light">Apple <br /> Airpods <br /> <span className="font-medium">Max</span></h1>
                                <p className="text-[14px] md:leading-6">Computational audio. <br /> Listen, it's powerful</p>
                            </div>
                        </div>
                        <div className="airpods flex bg-[#353535] text-white items-center gap-6 lg:gap-8 justify-between xl:justify-baseline pr-7">
                            <img src={vision} alt="vision" />
                            <div className="ps5-texts flex flex-col ">
                                <h1 className="text-[24px] md:text-[29px] font-light">Apple <br /> Vision <span className="font-medium">Pro</span></h1>
                                <p className="text-[14px] text-[#909090] lg:leading-6">An immersive way to <br /> experience <br /> entertainment</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="macbook flex flex-row-reverse bg-[#EDEDED] p-6 pr-0 items-center justify-between xl:justify-baseline">
                    <div className="flex justify-end">
                        <img src={mac} alt="mac" />
                    </div>
                    <div className="macbook-texts flex flex-col gap-4">
                        <h1 className="text-[34px] md:text-[56px] font-thin md:leading-14">Macbook <br /><span className="font-medium">Air</span></h1>
                        <p className="text-[#909090] text-[13px] md:text-[14px] leading-6">The new 15‑inch MacBook Air makes room for more <br /> of what you love with a spacious Liquid Retina <br /> display.</p>
                        <button className="w-fit border-2 border-black rounded-md py-0.5 md:py-2.5 px-4 md:px-8 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500 cursor-pointer hover:text-shadow-lg hover:text-shadow-gray-500">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
