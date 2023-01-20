import React from 'react';
import SidebarMenu from './components/sidebarMenu';
import * as S from "./styled"

export default function AccountLayout({ children }) {
    return (
        <div className={S.mainDiv}>
            <div className={S.container}>
                <SidebarMenu />
                {children}
            </div>
        </div>
    )
}
