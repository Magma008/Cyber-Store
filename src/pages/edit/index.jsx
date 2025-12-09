import React, { useEffect, useRef, useState } from 'react'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendData } from '../../features/userData/userSlice';
import { Bounce, toast } from 'react-toastify';

const Edit = () => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const imageRef = useRef()
    const fullNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const phoneRef = useRef()

    const passwordManager = (e) => {
        e.preventDefault();
        setVisible(prev => !prev)
    }

    useEffect(() => {
        const getData = async () => {
            const resp = JSON.parse(localStorage.getItem("userInfo"))
            setData(resp)
        }
        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date().getTime(),
            url: imageRef.current.value,
            name: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            phoneNumber: phoneRef.current.value,
        }
        dispatch(sendData(data))
        toast.info('Data edited successfully! 🥳', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        navigate("/user")
    }

    // console.log(data);


    return (
        <div className='min-h-[60vh] flex justify-center items-center scale-[0.8] sm:scale-100'>
            <div className="bg-amber-400 p-4 sm:p-6 rounded-xl flex-col gap-5 flex my-8">
                <h1 className="text-center text-3xl mb-5 font-semibold text-cyan-400">Edit Info</h1>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-5'>
                    <input ref={imageRef} defaultValue={data.url} required type="text" placeholder='New Image URL' className='min-w-[300px] outline-0 border-2 rounded-md border-white px-4 py-1.5 placeholder:text-cyan-700 text-white' />
                    <input ref={fullNameRef} defaultValue={data.name} required type="text" placeholder='New Name' className='min-w-[300px] outline-0 border-2 rounded-md border-white px-4 py-1.5 placeholder:text-cyan-700 text-white' />
                    <input ref={phoneRef} defaultValue={data.phoneNumber} required type="text" placeholder='New Number' className='min-w-[300px] outline-0 border-2 rounded-md border-white px-4 py-1.5 placeholder:text-cyan-700 text-white' />
                    <input ref={emailRef} defaultValue={data.email} required type="email" placeholder='New Email' className='min-w-[300px] outline-0 border-2 rounded-md border-white px-4 py-1.5 placeholder:text-cyan-700 text-white' />
                    <div className="relative">
                        <input ref={passwordRef} defaultValue={data.password} required type={`${visible ? "text" : "password"}`} placeholder='New Password' className='min-w-[300px] outline-0 border-2 rounded-md border-white px-4 py-1.5 placeholder:text-cyan-700 text-white' />
                        {/* <FaRegEye onClick={() => setVisible(prev => !prev)} className='absolute right-2.5 top-[50%] translate-y-[-50%] cursor-pointer' /> */}
                        <button onClick={(e) => passwordManager(e)} className="absolute right-2.5 top-[50%] translate-y-[-50%] cursor-pointer text-white">
                            {/* <FaRegEye /> */}
                            {visible ? <FaEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>
                    <div className="flex w-full items-center gap-5">
                        <button onClick={() => navigate('/user')} className="bg-[#EDEDED] text-black border-2 border-[#EDEDED] transition-all duration-300 hover:bg-transparent hover:text-white  w-full px-5 py-1.5 rounded-md cursor-pointer" type='button'>Cancel</button>
                        <button className="bg-[#EDEDED] text-black border-2 border-[#EDEDED] transition-all duration-300 hover:bg-transparent hover:text-white  w-full px-5 py-1.5 rounded-md cursor-pointer" type='submit'>Confirm</button>
                        {/* <button className="bg-red-500 w-full px-5 py-1.5" type='submit'>Submit</button> */}
                    </div>
                </form>
                {/* <p className='text-[13px] text-center text-white'>Already have an account? <Link to="/login"><span className='text-indigo-600 underline'>Then Log In</span></Link></p> */}
            </div>
        </div>
    )
}

export default Edit
