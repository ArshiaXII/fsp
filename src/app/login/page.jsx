"use client"
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import * as S from "./styled";
import * as yup from "yup";

export default function LoginPage() {


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberme: []
        },
        onSubmit: async (values) => {
            const rest = await fetch(`https://amber-goat-garb.cyclic.app/users?email=${values.email}`);
            const data = rest.json();
            console.log(data);
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required("Lütfen gidiş noktanızı seçin."),
            password: yup.string().min(6, "Parolanız çok kısa").max(15, "Parolanız çok uzun!").required("Lütfen bir tarih seçin"),
        })
    });


    return (
        <div className={S.mainDiv}>

            <div className={S.container}>
                <div className={S.loginDiv}>
                    <div className={S.loginBody}>
                        <FaUserCircle className='text-8xl text-customLightGray' />
                        <h1 className={S.loginTitle}>Giriş Yap</h1>

                        <form onSubmit={formik.handleSubmit} className={S.loginForm}>
                            {/* E-Mail */}
                            <div className={S.loginInputDiv}>
                                <span className={S.loginSpan}>
                                    <MdAlternateEmail />
                                </span>
                                <input name='email' onChange={formik.handleChange} placeholder='Email' type="email" className='w-48 p-2' />
                            </div>
                            {/* Password */}
                            <div className={S.loginInputDiv}>
                                <span className={S.loginSpan}>
                                    <RiLockPasswordLine />
                                </span>
                                <input name='password' onChange={formik.handleChange} placeholder='Parola' type="password" className='w-48 p-2' />
                            </div>

                            {/* Remember Me */}
                            <div className={S.loginRememberDiv}>
                                <span className={S.loginRememberCheckBox}>
                                    <input value={true} name='rememberme' onChange={formik.handleChange} type="checkbox" id="remember-me-input" />
                                    <label htmlFor='remember-me-input'> Beni Hatırla</label>
                                </span>
                                <Link href="/forgot-password" className={S.forgotPassword}>Şifremi Unuttum</Link>
                            </div>
                            {/* Login Button */}
                            <div className='w-full'>
                                <button type='submit' className={S.loginBtn}>Giriş Yap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
