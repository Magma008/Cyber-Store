// import React, { useEffect, useRef, useState } from ' react'
import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { IoSearchOutline } from 'react-icons/io5';
import { phones } from '../../mock/database';
import {FaHandPointRight} from "react-icons/fa";

const Sidebar = () => {
    const [brand, setBrand] = useState(false)
    const [battery, setBattery] = useState(false)
    const [ram, setRam] = useState(false)
    const [rom, setRom] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`w-[250px] md:min-w-[260px] top-[10%] md:p-4 bg-black/50 backdrop-blur-md border-2 border-black md:bg-transparent md:border-0 md:backdrop-blur-none text-white md:text-black fixed md:sticky z-30 p-6 rounded-2xl transition-all duration-300 ${ isOpen ? "-translate-x-[275px]" : "translate-0"} md:translate-0`}>
            <div className="flex flex-col gap-5">

                <div className="accordion  flex flex-col">
                    <div className="accordion-head border-b border-b-[#B5B5B5]">
                        <button onClick={() => setBrand(!brand)} className='py-3 px-1 flex justify-between w-full cursor-pointer items-center text-2xl'>
                            <h2 className="text-[18px] font-medium">Brands</h2>
                            <FiChevronDown className={`${brand && "rotate-180"} transition-all duration-300`} />
                        </button>
                    </div>
                    <div className={`accordion-body ${brand ? `py-4 px-1 h-[350.5px]` : "py-0 px-1 h-0"} overflow-hidden transition-all duration-300`}>
                        <div className="input flex bg-[#F5F5F5] py-1.5 pl-2 items-center gap-2 rounded-md">
                            <IoSearchOutline className='text-[#656565]' />
                            <input className='outline-0 text-black placeholder:text-[#656565]' type="text" placeholder='Search' />
                        </div>
                        <ul className="flex flex-col gap-2 pt-4">
                            {
                                phones[0].datas.map((item, i) => (
                                    <li key={i} className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-4 h-4' />
                                        <p className="text-[15px] font-medium">{item.name} <span className='font-normal text-[12px]'>{item.stock}</span></p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="accordion  flex flex-col">
                    <div className="accordion-head border-b border-b-[#B5B5B5]">
                        <button onClick={() => setBattery(!battery)} className='py-3 px-1 flex justify-between w-full cursor-pointer items-center text-2xl'>
                            <h2 className="text-[18px] font-medium">Battery Capacity</h2>
                            <FiChevronDown className={`${battery && "rotate-180"} transition-all duration-300`} />
                        </button>
                    </div>
                    <div className={`accordion-body ${battery ? `py-4 px-1 h-[228.5px]` : "py-0 px-1 h-0"} overflow-hidden transition-all duration-300`}>
                        <div className="input flex bg-[#F5F5F5] py-1.5 pl-2 items-center gap-2 rounded-md">
                            <IoSearchOutline className='text-[#656565]' />
                            <input className='text-black outline-0 placeholder:text-[#656565]' type="text" placeholder='Search' />
                        </div>
                        <ul className="flex flex-col gap-2 pt-4">
                            {
                                phones[1].datas.map((item, i) => (
                                    <li key={i} className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-4 h-4' />
                                        <p className="text-[15px] font-medium">{item.name} <span className='font-normal text-[12px]'>{item.stock}</span></p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="accordion  flex flex-col">
                    <div className="accordion-head border-b border-b-[#B5B5B5]">
                        <button onClick={() => setRam(!ram)} className='py-3 px-1 flex justify-between w-full cursor-pointer items-center text-2xl'>
                            <h2 className="text-[18px] font-medium">RAM</h2>
                            <FiChevronDown className={`${ram && "rotate-180"} transition-all duration-300`} />
                        </button>
                    </div>
                    <div className={`accordion-body ${ram ? `py-4 px-1 h-[228.5px]` : "py-0 px-1 h-0"} overflow-hidden transition-all duration-300`}>
                        <div className="input flex bg-[#F5F5F5] py-1.5 pl-2 items-center gap-2 rounded-md">
                            <IoSearchOutline className='text-[#656565]' />
                            <input className='text-black outline-0 placeholder:text-[#656565]' type="text" placeholder='Search' />
                        </div>
                        <ul className="flex flex-col gap-2 pt-4">
                            {
                                phones[2].datas.map((item, i) => (
                                    <li key={i} className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-4 h-4' />
                                        <p className="text-[15px] font-medium">{item.name} <span className='font-normal text-[12px]'>{item.stock}</span></p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="accordion  flex flex-col">
                    <div className="accordion-head border-b border-b-[#B5B5B5]">
                        <button onClick={() => setRom(!rom)} className='py-3 px-1 flex justify-between w-full cursor-pointer items-center text-2xl'>
                            <h2 className="text-[18px] font-medium">Storage</h2>
                            <FiChevronDown className={`${rom && "rotate-180"} transition-all duration-300`} />
                        </button>
                    </div>
                    <div className={`accordion-body ${rom ? `py-4 px-1 h-[289.5px]` : "py-0 px-1 h-0"} overflow-hidden transition-all duration-300`}>
                        <div className="input flex bg-[#F5F5F5] py-1.5 pl-2 items-center gap-2 rounded-md">
                            <IoSearchOutline className='text-[#656565]' />
                            <input className='text-black outline-0 placeholder:text-[#656565]' type="text" placeholder='Search' />
                        </div>
                        <ul className="flex flex-col gap-2 pt-4">
                            {
                                phones[3].datas.map((item, i) => (
                                    <li key={i} className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-4 h-4' />
                                        <p className="text-[15px] font-medium">{item.name} <span className='font-normal text-[12px]'>{item.stock}</span></p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
            
            <div className={`handler md:hidden  text-cyan-500 bg-black/40 border border-cyan-500 rounded-tr-2xl rounded-br-2xl text-4xl w-12 h-12 p-1 pl-0 absolute -right-12 cursor-pointer bottom-4`}>
                <FaHandPointRight className={`transition-all duration-300 ${!isOpen && "rotate-y-180"}`} onClick={() => setIsOpen(val => !val)} />
            </div>
        </div>
    )
}

export default Sidebar
