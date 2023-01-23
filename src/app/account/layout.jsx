"use client"
import { UsersContext } from '@/context/User';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import SidebarMenu from './components/sidebarMenu';
import * as S from "./styled"

export default function AccountLayout({ children }) {


    const router = useRouter();

    const { isLoginned } = useContext(UsersContext);

    useEffect(() => {
        if (isLoginned === false) {
            router.push('/login');
        }
    }, [isLoginned])

    return (
        <div className={S.mainDiv}>
            <div className={S.container}>
                {isLoginned === true ?
                    <>
                        <SidebarMenu />
                        {children}
                    </>
                    : null}
            </div>
        </div>
    )
}
