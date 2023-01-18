import Image from 'next/image'
import React from 'react'
import { BsTrash } from 'react-icons/bs'

export default function BasketPage() {
    return (
        <div className='bg-customLightGray'>
            <div className='container px-4 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start gap-x-6'>
                <div className='bg-customWhite flex flex-col items-start md:basis-9/12 gap-y-6 p-4'>
                    <div className='text-2xl'>
                        <h1>Sepet Detayı</h1>
                    </div>
                    <div className='flex justify-start items-center border w-full border-gray-300 border-solid p-2'>
                        <div className='border-r border-solid border-gray-300 p-2'>
                            <Image width={85} height={85} src="https://st2.myideasoft.com/idea/hz/44/myassets/products/776/joseph-joseph-70517-flex-smart-tuvalet-fircasi-paslanmaz-celik-7898_min.jpeg?rev=1673848298" alt="resm" />
                        </div>
                        <div className='flex flex-col gap-y-8 py-2 px-4 w-full'>
                            <div className='flex flex-col gap-y-4 md:flex-row justify-between items-center text-sm '>
                                <div className='flex justify-start items-center md:basis-6/12 '>
                                    Joseph Joseph 70517 Flex Smart Tuvalet Fırçası - Paslanmaz Çelik
                                </div>
                                <div className='flex justify-between items-center w-full md:basis-6/12 '>
                                    <div className='flex items-center justify-center'>
                                        <div className='cursor-pointer border border-solid border-gray-300 md:font-extrabold md:text-xl h-4 w-4 md:h-8 md:w-8 flex justify-center items-center'>
                                            -
                                        </div>
                                        <div className='text-xs flex flex-col items-center justify-center h-4 w-8 border md:h-8 md:w-16 border-solid border-gray-300'>
                                            <div>1</div>
                                            <div className='hidden md:block'>Adet</div>
                                        </div>
                                        <div className='cursor-pointer border border-solid border-gray-300 md:font-extrabold md:text-xl h-4 w-4 md:h-8 md:w-8 flex justify-center items-center'>
                                            +
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end justify-center text-xs md:text-sm'>
                                        <div className='font-medium'>804,24 TL</div>
                                        <div>+ KDV % 18</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-xs'>
                                <button className='flex gap-x-2 items-center border border-solid border-gray-300 p-1 text-gray-300'><span><BsTrash /></span>Sepetten Sil</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start items-center border w-full border-gray-300 border-solid p-2'>
                        <div className='border-r border-solid border-gray-300 p-2'>
                            <Image width={85} height={85} src="https://st2.myideasoft.com/idea/hz/44/myassets/products/776/joseph-joseph-70517-flex-smart-tuvalet-fircasi-paslanmaz-celik-7898_min.jpeg?rev=1673848298" alt="resm" />
                        </div>
                        <div className='flex flex-col gap-y-8 py-2 px-4 w-full'>
                            <div className='flex flex-col gap-y-4 md:flex-row justify-between items-center text-sm '>
                                <div className='flex justify-start items-center md:basis-6/12 '>
                                    Joseph Joseph 70517 Flex Smart Tuvalet Fırçası - Paslanmaz Çelik
                                </div>
                                <div className='flex justify-between items-center w-full md:basis-6/12 '>
                                    <div className='flex items-center justify-center'>
                                        <div className='cursor-pointer border border-solid border-gray-300 md:font-extrabold md:text-xl h-4 w-4 md:h-8 md:w-8 flex justify-center items-center'>
                                            -
                                        </div>
                                        <div className='text-xs flex flex-col items-center justify-center h-4 w-8 border md:h-8 md:w-16 border-solid border-gray-300'>
                                            <div>1</div>
                                            <div className='hidden md:block'>Adet</div>
                                        </div>
                                        <div className='cursor-pointer border border-solid border-gray-300 md:font-extrabold md:text-xl h-4 w-4 md:h-8 md:w-8 flex justify-center items-center'>
                                            +
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end justify-center text-xs md:text-sm'>
                                        <div className='font-medium'>804,24 TL</div>
                                        <div>+ KDV % 18</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-xs'>
                                <button className='flex gap-x-2 items-center border border-solid border-gray-300 p-1 text-gray-300'><span><BsTrash /></span>Sepetten Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-customWhite basis-3/12 p-4 flex flex-col gap-y-2 '>
                    <div className='text-2xl'>
                        <h1>Sepet Özeti</h1>
                    </div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <div className='flex justify-between items-center text-xs'>Ara Toplam <span className='font-medium'>6.735,59 TL</span></div>
                        <div className='flex justify-between items-center text-xs'>KDV <span className='font-medium'>1.212,41 TL</span></div>
                        <div className='flex justify-between items-center text-xs'>KDV Dahil <span className='font-medium'>7.948,00 TL</span></div>
                    </div>
                    <div className='w-full '>
                        <div className='flex justify-between items-center text-lg'>Toplam <span className='font-medium'>7.948,00 TL</span></div>
                    </div>
                    <div>
                        <button className='w-full text-customWhite bg-customRed py-2'>Alışverişi Tamamla</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
