"use client"
import { UsersContext } from '@/context/User';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import SidebarMenu from './components/sidebarMenu';
import * as S from "./styled"

export default function AccountLayout({ children }) {


    const router = useRouter();
    var loginned = false;
    
    if (typeof window !== 'undefined') {
        var loginned = JSON.parse(localStorage.getItem("loginned"));
    }


    useEffect(() => {
        if (loginned === false) {
            router.push('/login');
        }
    }, [loginned])

    return (
        <div className={S.mainDiv}>
            <div className={S.container}>
                {loginned === true ?
                    <>
                        <SidebarMenu />
                        {children}
                    </>
                    : null}
            </div>
        </div>
    )
}


