"use client"
import React, { useContext, useState } from 'react';
import * as yup from "yup";
import { UsersContext } from '@/context/User';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as S from "./styled";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from 'next/link';


export default function LoginForm() {

    const router = useRouter();

    const { setIsLoginned } = useContext(UsersContext);

    const [emailNotFound, setEmailNotFound] = useState(false);
    const [passwordWrong, setPasswordWrong] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberme: []
        },
        onSubmit: async (values) => {
            const rest = await fetch(`https://amber-goat-garb.cyclic.app/users?email=${values.email}`);
            const data = await rest.json();
            if (data.length < 1) {
                setEmailNotFound(true);
                return false;
            }
            else {
                if (data[0].password === values.password) {
                    // setIsLoginned(true);
                    setEmailNotFound(false);
                    setPasswordWrong(false);
                    router.push("/");
                } else {
                    setPasswordWrong(true);
                }
            }
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required("Lütfen gidiş noktanızı seçin."),
            password: yup.string().min(6, "Parolanız çok kısa").max(15, "Parolanız çok uzun!").required("Lütfen bir tarih seçin"),
        })
    });



    return (
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
                {emailNotFound === true ? <small className={S.errorMessage}>Kayıtlı e-mail bulunamadı!</small> : null}
                {/* Password */}
                <div className={S.loginInputDiv}>
                    <span className={S.loginSpan}>
                        <RiLockPasswordLine />
                    </span>
                    <input name='password' onChange={formik.handleChange} placeholder='Parola' type="password" className='w-48 p-2' />
                </div>
                {passwordWrong === true ? <small className={S.errorMessage}>Lütfen parolanızı kontrol edin!</small> : null}
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
    )
}
