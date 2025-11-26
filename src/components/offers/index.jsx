import React from 'react'
// import offer from "../../assets/offer.png"
import { Link } from 'react-router-dom'
//  style={{ backgroundImage: `url(${offer})`, }}

const Offers = () => {
    return (
        <div className='mt-10 max-w-[1800px] mx-auto'>
            <Link to="/">
                <div className={`min-h-[512px] sm:min-h-[448px] bg-no-repeat bg-cover bg-center bg-[url('/offer-sm.png')] sm:bg-[url('/offer.png')]`}>

                </div>
            </Link>
        </div>
    )
}

export default Offers
