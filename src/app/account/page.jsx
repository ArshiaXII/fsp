import React from 'react';
import MainpageContent from './components/mainpageContent';
import SidebarMenu from './components/sidebarMenu';
import * as S from "./styled"

export default function AccountPage() {
  return (
    <div className={S.mainDiv}>
        <div className={S.container}>
        <SidebarMenu />
        <MainpageContent />
        </div>
    </div>
  )
}
