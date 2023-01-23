"use client"
import { UsersContext } from '@/context/User';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import MainpageContent from './components/mainpageContent';

export default function AccountPage() {


  const router = useRouter();

  const { isLoginned } = useContext(UsersContext);

  useEffect(() => {
    if (isLoginned === false) {
      router.push('/login');
    }
  }, [isLoginned])

  return (
    <>
      {isLoginned === true ?
        <MainpageContent />
        : null}
    </>
  )
}

