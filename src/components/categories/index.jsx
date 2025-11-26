import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { categories } from '../../mock/database';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='py-16 bg-[#FAFAFA]'>
            <div className="main-container">
                <div className="title flex items-center justify-between">
                    <h2 className="font-medium text-[24px]">Browse By Category</h2>
                    <div className="flex gap-3 items-center text-3xl">
                        <IoChevronBackSharp className='cursor-pointer transition-all duration-300 hover:-translate-x-3.5' />
                        <IoChevronForwardSharp className='cursor-pointer transition-all duration-300 hover:translate-x-3.5' />
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center mt-8 gap-4">
                    {
                        categories.map((item, index) => (
                            <center key={index}>
                                <div className="">
                                    <Link to={`/categories/${item.path}`}>
                                        <div key={index} className="category bg-[#EDEDED] flex flex-col items-center justify-center gap-4 rounded-2xl w-[140] sm:w-40  h-[108px] sm:h-32 text-black">
                                            <img className='w-12 h-12' src={item.image} alt={item.name} />
                                            <p className="text-[14px] sm:text-base">{item.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </center>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
