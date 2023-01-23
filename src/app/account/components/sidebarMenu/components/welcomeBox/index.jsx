"use client"
import { UsersContext } from '@/context/User';
import React, { useContext } from 'react';
import * as S from "./styled"

export default function WelcomeBox() {

    const {loginnedUser} = useContext(UsersContext);


  return (
    <div className={S.welcomeBox}>
    <h4 className={S.welcomeTitles}>Hoşgeldiniz</h4>
    <h4 className={S.welcomeTitles}>{loginnedUser.firstname} {loginnedUser.lastname}</h4>
    <h5>Son Giriş: <span>19-01-2023 17:06:51</span></h5>
  </div>
  )
}
