import React, { useEffect, useState } from 'react'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaPencilAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { Flip, Slide, toast } from 'react-toastify'

const UserData = () => {
    const [info, setInfo] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const data = JSON.parse(localStorage.getItem("userInfo"))
            setInfo(data)

        }
        getData()
    }, [])

    const deleteHandler = () => {
        localStorage.removeItem("userInfo")
        toast.error('User data deleted! 🗑', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
        navigate("/signup")
    }
    

    return (
        <div className='py-14 min-h-[44vh]'>
            <div className="main-container">
                <div className="flex justify-between gap-9 md:items-center flex-col md:flex-row">

                    <div className='flex gap-3 sm:gap-8 items-center flex-col sm:flex-row'>
                        <div className="userImage w-28 sm:w-32 h-28 sm:h-32 rounded-full overflow-hidden">
                            <img className='w-full h-full object-center object-cover' src={info?.url?.length > 20 ? info?.url :  "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="👤" />
                            {/* <img className='w-full h-full object-center object-cover' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-image" /> */}
                        </div>

                        <div className="name flex flex-col gap-1 sm:gap-2">
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{info?.name}</h1>
                            <p className="sm:text-lg md:text-xl font-medium">{info?.email}</p>
                            <p className="md:text-lg font-light">{info?.phoneNumber}</p>
                        </div>

                    </div>

                    <div className="icons flex items-center gap-6 justify-between">
                        <div className="flex items-center gap-3">
                            <Link to="/edit">
                                <button className="text-2xl sm:text-3xl text-green-500 cursor-pointer">
                                    <FaPencilAlt />
                                </button>
                            </Link>
                            <button onClick={() => deleteHandler()} className="text-2xl sm:text-3xl text-red-500 cursor-pointer">
                                <BsTrash3Fill />
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <Link to="/carts">
                                <p className='cursor-pointer text-cyan-500 font-medium text-[15px] sm:text-lg'>My Cart</p>
                            </Link>
                            <Link to="/wishlist">
                                <p className='cursor-pointer text-cyan-500 font-medium text-[15px] sm:text-lg'>Liked Products</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserData
