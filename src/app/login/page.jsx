import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import * as S from "./styled";

export default function LoginPage() {
    return (
        <div className={S.mainDiv}>

            <div className={S.container}>
                <div className={S.loginDiv}>
                    <div className={S.loginBody}>
                        <FaUserCircle className='text-8xl text-customLightGray' />
                        <h1 className={S.loginTitle}>Giriş Yap</h1>

                        <form className={S.loginForm}>
                            {/* E-Mail */}
                            <div className={S.loginInputDiv}>
                                <span className={S.loginSpan}>
                                    <MdAlternateEmail />
                                </span>
                                <input placeholder='Email' type="email" className='w-48 p-2' />
                            </div>
                            {/* Password */}
                            <div className={S.loginInputDiv}>
                                <span  className={S.loginSpan}>
                                    <RiLockPasswordLine />
                                </span>
                                <input placeholder='Parola' type="password" className='w-48 p-2' />
                            </div>

                            {/* Remember Me */}
                            <div className={S.loginRememberDiv}>
                                <span className={S.loginRememberCheckbox}>
                                    <input type="checkbox" id="remember-me-input" />
                                    <label htmlFor='remember-me-input'> Beni Hatırla</label>
                                </span>
                                    <Link href="/forgot-password" className={S.forgotPassword}>Şifremi Unuttum</Link>
                            </div>
                            {/* Login Button */}
                            <div className='w-full'>
                                <button className={S.loginBtn}>Giriş Yap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
