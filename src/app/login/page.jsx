import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri"

export default function LoginPage() {
    return (
        <div className='bg-customLightGray py-6'>

            <div className='container px-12'>
                <div className=' flex justify-center items-center p-4 h-96'>
                    <div className='bg-customWhite border border-solid border-gray-300 py-4 px-8 flex flex-col items-center justify-center gap-y-3'>
                        <FaUserCircle className='text-8xl text-customLightGray' />
                        <h1 className='text-xl font-medium'>Giriş Yap</h1>

                        <form className='flex flex-col gap-y-3 items-center justify-center'>
                            {/* E-Mail */}
                            <div className='border border-solid border-gray-300 flex justify-center items-center'>
                                <span className='border-r p-2 border-gray-300 border-solid flex justify-center items-center'>
                                    <MdAlternateEmail />
                                </span>
                                <input placeholder='Email' type="email" className='w-48 p-2' />
                            </div>
                            {/* Password */}
                            <div className='border border-solid border-gray-300 flex justify-center items-center'>
                                <span  className='border-r p-2 border-gray-300 border-solid flex justify-center items-center'>
                                    <RiLockPasswordLine />
                                </span>
                                <input placeholder='Parola' type="password" className='w-48 p-2' />
                            </div>

                            {/* Remember Me */}
                            <div className='text-xs flex justify-between items-center w-full px-2'>
                                <span className='flex justify-start items-center gap-x-1'>
                                    <input type="checkbox" id="remember-me-input" />
                                    <label htmlFor='remember-me-input'> Beni Hatırla</label>
                                </span>
                                    <Link href="/forgot-password" className="text-customRed hover:underline" >Şifremi Unuttum</Link>
                            </div>
                            {/* Login Button */}
                            <div className='w-full'>
                                <button className='text-customWhite bg-customRed w-full py-2'>Giriş Yap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
