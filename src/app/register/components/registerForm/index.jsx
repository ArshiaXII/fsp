"use client"
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { BsCheckCircleFill, BsGenderAmbiguous } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdAlternateEmail, MdPermIdentity } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as S from "./styled";
import * as yup from "yup";
import Link from 'next/link';

export default function RegisterForm() {

    const [registryState, setRegistryState] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            email2: "",
            password: "",
            password2: "",
            gender: ""
        },
        onSubmit: async (values) => {
            await fetch("https://amber-goat-garb.cyclic.app/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname: values.firstname, lastname: values.lastname, email: values.email, password: values.password })
            }).then(() => {
                setRegistryState(true);
            })
        },
        validationSchema: yup.object().shape({
            firstname: yup.string().min(2, "Adınız çok kısa!").max(15, "Adınız çok uzun!").required("Lütfen adınızı giriniz."),
            lastname: yup.string().min(2, "Soyadınız adı çok kısa!").max(15, "Soyadınız çok uzun!").required("Lütfen soyadınızı giriniz."),
            email: yup.string().email("Lütfen geçerli bir e-mail giriniz!").required("Lütfen e-mail adresinizi giriniz!"),
            email2: yup.string().required("Lütfen e-mail doğrulamasını girin!").oneOf([yup.ref("email"), null], "Emailler eşleşmiyor!"),
            password: yup.string().min(6, "Parolanız çok kısa").max(15, "Parolanız çok uzun!").required("Lütfen bir parola belirleyin!"),
            password2: yup.string().required("Lütfen parola doğrulamasını girin!").oneOf([yup.ref("password"), null], "Parolalar eşleşmiyor!"),
            gender: yup.string().required("Cinsiyetinizi seçiniz."),
        })
    });



    return (
        <>
            {registryState === false ?
                <>
                    <FaUserCircle className='text-8xl text-customLightGray' />
                    <h1 className={S.registerTitle}>Kayıt Ol</h1>

                    <form onSubmit={formik.handleSubmit} className={S.registerForm}>
                        <div className={S.registerInputDiv}>
                            <span className={S.registerInputSpan}>
                                <MdPermIdentity />
                            </span>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="firstname" placeholder='Ad' type="text" className={S.registerTextInput} />
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="lastname" placeholder='Soyad' type="text" className={S.registerTextInput2} />
                        </div>
                        {formik.errors.firstname && formik.touched.firstname ? <small className={S.errorMessage}>{formik.errors.firstname}</small> : formik.errors.lastname && formik.touched.lastname ? <small className={S.errorMessage}>{formik.errors.lastname}</small> : null}
                        {/* E-Mail */}
                        <div className={S.registerInputDiv}>
                            <span className={S.registerInputSpan}>
                                <MdAlternateEmail />
                            </span>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" placeholder='Email' type="email" className={S.registerTextInput} />
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="email2" placeholder='Email Tekrar' type="email" className={S.registerTextInput2} />
                        </div>
                        {formik.errors.email && formik.touched.email ? <small className={S.errorMessage}>{formik.errors.email}</small> : formik.errors.email2 && formik.touched.email2 ? <small className={S.errorMessage}>{formik.errors.email2}</small> : null}
                        {/* Password */}
                        <div className={S.registerInputDiv}>
                            <span className={S.registerInputSpan}>
                                <RiLockPasswordLine />
                            </span>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="password" placeholder='Parola' type="password" className={S.registerTextInput} />
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="password2" placeholder='Parola Tekrar' type="password" className={S.registerTextInput2} />
                        </div>
                        {formik.errors.password && formik.touched.password ? <small className={S.errorMessage}>{formik.errors.password}</small> : formik.errors.password2 && formik.touched.password2 ? <small className={S.errorMessage}>{formik.errors.password2}</small> : null}
                        {/* Gender Select */}
                        <div className={S.registerRadioInputMainDiv}>
                            <span className={S.registerInputSpan}>
                                <BsGenderAmbiguous />
                            </span>
                            <div className={S.registerRadioInputDiv}>
                                <div><input onBlur={formik.handleBlur} onChange={formik.handleChange} type="radio" name="gender" value="Kadın" /> <label>Kadın</label></div>
                                <div><input onBlur={formik.handleBlur} onChange={formik.handleChange} type="radio" name="gender" value="Erkek" /> <label>Erkek</label></div>
                                <div><input onBlur={formik.handleBlur} onChange={formik.handleChange} type="radio" name="gender" value="Belirtilmemiş" /> <label>*</label></div>
                            </div>
                        </div>
                        {formik.errors.gender && formik.touched.gender ? <small className={S.errorMessage}>{formik.errors.gender}</small> : null}
                        {/* Register Button */}
                        <div className='w-full'>
                            <button type='submit' className={S.registerBtn}>Kayıt Ol</button>
                        </div>
                    </form>
                </>
                :
                <div className='p-5 flex flex-col items-center justify-center gap-y-5'>
                    <BsCheckCircleFill className='text-8xl text-green-600' />
                    <h1 className={S.registerTitle}>Kayıt İşlemi Başarılı</h1>
                    <Link href="/login" className="py-1 px-2 bg-gray-500 text-customWhite">Giriş Yapmak İçin Tıklayın</Link>
                </div>
            }
        </>
    )
}
