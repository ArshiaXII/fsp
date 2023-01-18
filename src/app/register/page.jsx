import Link from 'next/link';
import React from 'react'
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdAlternateEmail, MdPermIdentity } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as S from "./styled";



export default function RegisterPage() {
    return (
        <div className='bg-customLightGray py-6'>

            <div className='container px-12'>
                <div className=' flex justify-center items-center p-4'>
                    <div className='bg-customWhite  border border-solid border-gray-300 py-4 sm:px-8 px-16 flex flex-col items-center justify-center gap-y-3'>
                        <FaUserCircle className='text-8xl text-customLightGray' />
                        <h1 className='text-xl font-medium'>Kayıt Ol</h1>

                        <form className='flex flex-col gap-y-3 items-center justify-center'>
                            <div className='border border-solid border-gray-300 flex flex-col sm:flex-row justify-center items-center'>
                                <span className='border-r p-2 border-gray-300 border-solid hidden sm:flex justify-center items-center'>
                                    <MdPermIdentity />
                                </span>
                                <input placeholder='Ad' type="text" className='w-48 p-2 border-r border-gray-300 border-solid' />
                                <input placeholder='Soyad' type="text" className='w-48 p-2' />
                            </div>
                            {/* E-Mail */}
                            <div className='border border-solid border-gray-300 flex flex-col sm:flex-row justify-center items-center'>
                                <span className='border-r p-2 border-gray-300 border-solid hidden sm:flex  justify-center items-center'>
                                    <MdAlternateEmail />
                                </span>
                                <input placeholder='Email' type="email" className='w-48 p-2 border-r border-gray-300 border-solid' />
                                <input placeholder='Email Tekrar' type="email" className='w-48 p-2' />
                            </div>
                            {/* Password */}
                            <div className='border border-solid border-gray-300 flex flex-col sm:flex-row justify-center items-center'>
                                <span className='border-r p-2 border-gray-300 border-solid hidden sm:flex  justify-center items-center'>
                                    <RiLockPasswordLine />
                                </span>
                                <input placeholder='Parola' type="password" className='w-48 p-2 border-r border-gray-300 border-solid' />
                                <input placeholder='Parola Tekrar' type="password" className='w-48 p-2 ' />
                            </div>
                            {/* Gender Select */}
                            <div className='w-full border border-solid border-gray-300 flex justify-start items-center'>
                                <span className='border-r p-2 border-gray-300 border-solid hidden sm:flex  justify-center items-center'>
                                    <BsGenderAmbiguous />
                                </span>
                                <div className='flex justify-center items-center w-full gap-x-3'>
                                    <div><input type="radio" name="gender" value="female" /> <label>Kadın</label></div>
                                    <div><input type="radio" name="gender" value="male" /> <label>Erkek</label></div>
                                    <div><input type="radio" name="gender" value="unknown" /> <label>*</label></div>
                                </div>
                            </div>
                            {/* Register Button */}
                            <div className='w-full'>
                                <button className='text-customWhite bg-customRed w-full py-2'>Kayıt Ol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
