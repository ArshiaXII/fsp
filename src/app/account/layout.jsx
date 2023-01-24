"use client"
import { UsersContext } from '@/context/User';
import Link from 'next/link';
import React, { useContext } from 'react';
import SidebarMenu from './components/sidebarMenu';
import * as S from "./styled"

export default function AccountLayout({ children }) {

    const { isLoginned } = useContext(UsersContext);





    return (
        <div className={S.mainDiv}>
            <div className={S.container}>
                {isLoginned === true ?
                    <>
                        <SidebarMenu />
                        {children}
                    </>
                    :
                    <div className='bg-customWhite w-full h-48 text-2xl flex items-center justify-center gap-x-2'>
                        Lütfen <Link href="/login" className='text-customRed hover:underline'>giriş</Link>  yapınız.
                    </div>}
            </div>
        </div>
    )
}


