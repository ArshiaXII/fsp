"use client"
import { UsersContext } from '@/context/User';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import * as S from "./styled"
import * as yup from "yup";
import Link from 'next/link';


export default function EditPage() {

    const { loginnedUser, fetchLoginnedUserData } = useContext(UsersContext);
    const [confirmMessage,setConfirmMessage] = useState(false);


    const formik = useFormik({
        initialValues: {
            firstname: loginnedUser.firstname,
            lastname: loginnedUser.lastname,
            email: loginnedUser.email,
            birthday: loginnedUser.birthday,
            gender: loginnedUser.gender,
            tel: loginnedUser.tel,
            tc: loginnedUser.tc,
        },
        onSubmit: async (values) => {

            await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname: values.firstname, lastname: values.lastname, email: values.email, gender:values.gender, birthday: values.birthday, tel: values.tel, tc: values.tc })
            });
            fetchLoginnedUserData(loginnedUser.id);
            setConfirmMessage(true);

        },
        validationSchema: yup.object().shape({
            firstname: yup.string().min(2, "Adınız çok kısa!").max(15, "Adınız çok uzun!").required("Lütfen adınızı giriniz."),
            lastname: yup.string().min(2, "Soyadınız adı çok kısa!").max(15, "Soyadınız çok uzun!").required("Lütfen soyadınızı giriniz."),
            email: yup.string().email("Lütfen geçerli bir e-mail giriniz!").required("Lütfen e-mail adresinizi giriniz!"),
            gender: yup.string().required("Cinsiyetinizi seçiniz."),
        })
    })

    
    useEffect(() => {
        setConfirmMessage(false);
    },[formik.values])



    return (
        <div className={S.mainDiv}>
            <div className={S.pageTitle}>
                <h1>Bilgilerimi Düzenle</h1>
            </div>
            <div className={S.content}>

                <form className={S.form} onSubmit={formik.handleSubmit}>
                    <div className={S.inputDiv}>
                        <label htmlFor='ad'>Adı <span className={S.labelSpan}>*</span></label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstname} className={S.input} name="firstname" type="text" />     
                    </div>
                    {formik.errors.firstname ? <small className={S.errormessage}>{formik.errors.firstname}</small> : null}
                    <div className={S.inputDiv}>
                        <label htmlFor='soyad'>Soyadı <span className={S.labelSpan}>*</span></label>
                        <input onChange={formik.handleChange}  value={formik.values.lastname} className={S.input} name="lastname" type="text" />
                    </div>
                    {formik.errors.lastname ? <small className={S.errormessage}>{formik.errors.lastname}</small> : null}
                    <div className={S.inputDiv}>
                        <label htmlFor='email'>Email <span className={S.labelSpan}>*</span></label>
                        <input onChange={formik.handleChange} value={formik.values.email} className={S.input} name="email" type="email" />
                    </div>
                    {formik.errors.email ? <small className={S.errormessage}>{formik.errors.email}</small> : null}
                    <div className={S.inputDiv}>
                        <label htmlFor='birthday'>Doğum Tarihi</label>
                        <input onChange={formik.handleChange} value={formik.values.birthday} className={S.input} name="birthday" type="date" />
                    </div>
                    <div className={S.inputDiv}>
                        <label htmlFor='birthday'>Cinsiyeti</label>
                        <div className={S.radioInputDiv}>
                            <div><input onChange={formik.handleChange} checked={formik.values.gender === "Kadın" ? true : false} type="radio" name="gender" value="Kadın" /> <label>Kadın</label></div>
                            <div><input onChange={formik.handleChange} checked={formik.values.gender === "Erkek" ? true : false} type="radio" name="gender" value="Erkek" /> <label>Erkek</label></div>
                            <div><input onChange={formik.handleChange} checked={formik.values.gender === "Bilinmiyor" ? true : false} type="radio" name="gender" value="Bilinmiyor" /> <label>*</label></div>
                        </div>
                    </div>
                    {formik.errors.gender ? <small className={S.errormessage}>{formik.errors.gender}</small> : null}
                    <div className={S.inputDiv}>
                        <label htmlFor='telno'>Cep Telefonu</label>
                        <input onChange={formik.handleChange} value={formik.values.tel} className={S.input} name="tel" type="tel" />
                    </div>
                    <div className={S.inputDiv}>
                        <label htmlFor='tcno'>T.C Kimlik No</label>
                        <input onChange={formik.handleChange} value={formik.values.tc} className={S.input} name="tc" type="text" />
                    </div>
                    <div className={S.buttonDiv}>
                        <Link href="/account" className={S.cancelBtn}>İptal</Link>
                        <button type='submit' className={S.confirmBtn}>Onayla</button>
                    </div>
                    {confirmMessage === true ? <small className='text-sm text-green-600'>Başarıyla, bilgilerinizi güncelledik. </small> : null }
                </form>
            </div>
        </div>
    )
}
