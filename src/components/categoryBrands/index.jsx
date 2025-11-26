import React from 'react'
import Sidebar from '../sidebar'
import { Link, useParams } from 'react-router-dom'
import { IoChevronForward } from "react-icons/io5";
import CategoryCards from '../categoryCards';

const CategoryBrands = () => {
    const param = useParams()
    let currentPage = (param.id)

    let head = currentPage.split("")[0].toUpperCase()



    return (
        <div className='py-14'>
            <div className="main-container">
                <div className="flex text-[#A4A4A4] items-center gap-4 font-medium pb-14">
                    <Link to="/">
                        <p className="">Home</p>
                    </Link>
                    <IoChevronForward />
                    <p className="">Categories</p>
                    <IoChevronForward />
                    <p className="text-black">{`${head}${currentPage.slice(1)}`}</p>
                </div>
                <div className="flex gap-4">
                    <Sidebar />
                    <CategoryCards/>
                </div>
            </div>
        </div>
    )
}

export default CategoryBrands
