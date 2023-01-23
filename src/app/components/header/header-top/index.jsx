"use client"
import React, { useContext } from 'react';
import * as S from './styled';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';
import { UsersContext } from '@/context/User';

function HeaderTop() {

  const {isLoginned, setIsLoginned, loginnedUser} = useContext(UsersContext);

  const handleLogout = () => {
    setIsLoginned(false);
    localStorage.setItem("loginned", JSON.stringify(false));
    localStorage.setItem("loginnedUser", JSON.stringify(""));
  }

  return (
    <div className={S.row}>
      <div className={S.content}>
        <span className={S.user}>
          <BiUser />
        </span>
        {isLoginned === false ?  
        <>
        <Link href="/login">Üye Girişi</Link>
          -
        <Link href="/register">Yeni Üyelik</Link>
        </>
        : 
        <>
        <Link href="/account">Sn. {loginnedUser.firstname} {loginnedUser.lastname} </Link>
          -
        <Link onClick={() => handleLogout()} href="/">Çıkış</Link>
        </>
        }
      </div>
    </div>
  )
}


export default HeaderTop;
