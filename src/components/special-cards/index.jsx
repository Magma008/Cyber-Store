import React from 'react'
import { specialCards } from '../../mock/database'

const SpecialCards = () => {
    
    return (
        <div className='py-14'>
            <div className="main-container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {
                        specialCards.map((card, index) => (
                            <div key={index} className={`card p-2 sm:p-4 flex flex-col ${card.id == 2 ? "bg-[#F9F9F9]" : card.id == 3 ? "bg-[#EAEAEA]" : card.id == 4 ? "bg-[#2C2C2C] text-white" : "bg-white"}`}>
                                <div className="card-image aspect-8/10 p-2">
                                    <img src={card.image} className='w-full h-full object-contain object-center' alt={card.title} />
                                </div>
                                <div className="card-body flex flex-col gap-2 sm:gap-4 grow">
                                    <h1 className="font-light text-[18px] sm:text-[33px]">{card.title}</h1>
                                    <p className="text-[10px] sm:text-[14px] font-medium text-[#909090]">{card.text}</p>
                                    <button className={`border-2 text-[14px] sm:text-base mt-auto ${card.id == 4 ? "border-white" : "border-black"} rounded-md py-0.5 sm:py-2.5 px-4 sm:px-8 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500 cursor-pointer hover:text-shadow-lg hover:text-shadow-gray-500`}>Shop Now</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SpecialCards
