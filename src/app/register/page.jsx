"use client"
import { useFormik } from 'formik';
import React from 'react'
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdAlternateEmail, MdPermIdentity } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as S from "./styled";
import * as yup from "yup";



export default function RegisterPage() {

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            email2: "",
            password: "",
            password2: "",
            gender: "Belirtilmemiş"
        },
        onSubmit: async (values) => {
            await fetch("https://amber-goat-garb.cyclic.app/users",  {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              })
              console.log("başarılı");
        },
        validationSchema: yup.object().shape({
            firstname: yup.string().min(2,"Adınız çok kısa!").max(15,"Adınız çok uzun!").required("Lütfen adınızı giriniz."),
            lastname: yup.string().min(2,"Soyadınız adı çok kısa!").max(15,"Soyadınız çok uzun!").required("Lütfen soyadınızı giriniz."),
            email: yup.string().email().required("Lütfen gidiş noktanızı seçin."),
            email2: yup.string().oneOf([yup.ref("email"), null], "Emailler eşleşmiyor!"),
            password: yup.string().min(6,"Parolanız çok kısa").max(15,"Parolanız çok uzun!").required("Lütfen bir tarih seçin"),
            password2: yup.string().oneOf([yup.ref("password"), null], "Parolalar eşleşmiyor!"),
            gender: yup.string().required("Cinsiyetinizi seçiniz."),
        })
    });

    


    return (
        <div className={S.mainDiv}>

            <div className={S.container}>
                <div className={S.registerBody}>
                    <div className={S.registerMain}>
                        <FaUserCircle className='text-8xl text-customLightGray' />
                        <h1 className={S.registerTitle}>Kayıt Ol</h1>

                        <form onSubmit={formik.handleSubmit} className={S.registerForm}>
                            <div className={S.registerInputDiv}>
                                <span className={S.registerInputSpan}>
                                    <MdPermIdentity />
                                </span>
                                <input onChange={formik.handleChange} name="firstname" placeholder='Ad' type="text" className={S.registerTextInput} />
                                <input onChange={formik.handleChange} name="lastname" placeholder='Soyad' type="text" className={S.registerTextInput2} />
                            </div>
                            {/* E-Mail */}
                            <div className={S.registerInputDiv}>
                                <span className={S.registerInputSpan}>
                                    <MdAlternateEmail />
                                </span>
                                <input onChange={formik.handleChange} name="email" placeholder='Email' type="email" className={S.registerTextInput} />
                                <input onChange={formik.handleChange} name="email2" placeholder='Email Tekrar' type="email" className={S.registerTextInput2} />
                            </div>
                            {/* Password */}
                            <div className={S.registerInputDiv}>
                                <span className={S.registerInputSpan}>
                                    <RiLockPasswordLine />
                                </span>
                                <input onChange={formik.handleChange} name="password" placeholder='Parola' type="password" className={S.registerTextInput} />
                                <input onChange={formik.handleChange} name="password2" placeholder='Parola Tekrar' type="password" className={S.registerTextInput2} />
                            </div>
                            {/* Gender Select */}
                            <div className={S.registerRadioInputMainDiv}>
                                <span className={S.registerInputSpan}>
                                    <BsGenderAmbiguous />
                                </span>
                                <div className={S.registerRadioInputDiv}>
                                    <div><input onChange={formik.handleChange} type="radio" name="gender" value="Kadın" /> <label>Kadın</label></div>
                                    <div><input onChange={formik.handleChange} type="radio" name="gender" value="Erkek" /> <label>Erkek</label></div>
                                    <div><input onChange={formik.handleChange} type="radio" name="gender" value="Belirtilmemiş" /> <label>*</label></div>
                                </div>
                            </div>
                            {/* Register Button */}
                            <div className='w-full'>
                                <button type='submit' className={S.registerBtn}>Kayıt Ol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
