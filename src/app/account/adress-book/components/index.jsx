"use client"
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import * as S from "./styled";
import * as yup from "yup";
import { UsersContext } from '@/context/User';

export default function AddAdressModal({ setModalVisibility, modalVisibility, formValues, setFormValues, editMode, setEditMode }) {

    const { loginnedUser, fetchLoginnedUserData } = useContext(UsersContext);


    const formik = useFormik({
        initialValues: {
            title: formValues.title,
            adress: formValues.adress,
            country: formValues.country,
            city: formValues.city,
            state: formValues.state,
            tel: formValues.tel
        },
        onSubmit: async (values) => {
            var userAdressList = loginnedUser.adresses.slice();
            if (editMode === false) {
                //Add Adress
                userAdressList.push(values);
                await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ adresses: userAdressList })
                })
            }
            else {
                //Edit Adress
                userAdressList = loginnedUser.adresses.filter((el) => el.title !== formValues.title);
                userAdressList.push(values);
                await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ adresses: userAdressList })
                })
            }

            await fetchLoginnedUserData(loginnedUser.id);
            setModalVisibility(false);
            formik.handleReset();
        },
        onReset: () => {
            setModalVisibility(false)
        },
        validationSchema: yup.object().shape({
            title: yup.string().required("Lütfen bir adres tanımı giriniz!").min(2, "Adres tanımı çok kısa").max(12, "Adres tanımı çok uzun"),
            adress: yup.string().required("Lütfen bir adres giriniz!").min(10, "Adres çok kısa").max(50, "Adres çok uzun"),
            country: yup.string().required("Lütfen bir ülke giriniz!"),
            city: yup.string().required("Lütfen bir il giriniz!"),
            state: yup.string().required("Lütfen bir ilçe giriniz!"),
            state: yup.string().required("Lütfen bir telefon numarası giriniz!"),
        })
    })

    useEffect(() => {
        formik.setValues(formValues)
    }, [modalVisibility])







    return (
        <>
            {modalVisibility === true ?
                <div className={S.mainDiv} style={{ zIndex: "2" }}>
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-customWhite rounded-lg shadow relative p-2 pt-8">
                        <h1 className='px-8 text-xl font-medium'>{editMode === false ? "Adres Ekle" : "Adresi Düzenle"}</h1>
                        <form onReset={formik.handleReset} onSubmit={formik.handleSubmit} className={S.form}>
                            <div className={S.inputRow}>
                                <label htmlFor='title'>Adres Tanımı:</label>
                                <input value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange} className={S.textInput} name='title' type="text" />
                            </div>
                            {formik.errors.title && formik.touched.title ?
                                <div className={S.inputRow}>
                                    <small className={S.errormessage}>{formik.errors.title}</small>
                                </div>
                                : null}
                            <div className={S.inputRow}>
                                <label htmlFor='adress'>Adres:</label>
                                <textarea value={formik.values.adress} onBlur={formik.handleBlur} onChange={formik.handleChange} name="adress" rows="4" cols="22" className={S.textInput}>

                                </textarea>
                            </div>
                            {formik.errors.adress && formik.touched.adress ?
                                <div className={S.inputRow}>
                                    <small className={S.errormessage}>{formik.errors.adress}</small>
                                </div>
                                : null}
                            <div className={S.inputRow}>
                                <label htmlFor='country'>Ülke:</label>
                                <input value={formik.values.country} onBlur={formik.handleBlur} onChange={formik.handleChange} className={S.textInput} name='country' type="text" />
                            </div>
                            {formik.errors.country && formik.touched.country ?
                                <div className={S.inputRow}>
                                    <small className={S.errormessage}>{formik.errors.country}</small>
                                </div>
                                : null}
                            <div className={S.inputRow}>
                                <label htmlFor='city'>İl:</label>
                                <input value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} className={S.textInput} name='city' type="text" />
                            </div>
                            {formik.errors.city && formik.touched.city ?
                                <div className={S.inputRow}>
                                    <small className={S.errormessage}>{formik.errors.city}</small>
                                </div>
                                : null}
                            <div className={S.inputRow}>
                                <label htmlFor='state'>İlçe:</label>
                                <input value={formik.values.state} onBlur={formik.handleBlur} onChange={formik.handleChange} className={S.textInput} name='state' type="text" />
                            </div>
                            {formik.errors.state && formik.touched.state ?
                                <div className={S.inputRow}>
                                    <small className={S.errormessage}>{formik.errors.state}</small>
                                </div>
                                : null}
                            <div className={S.inputRow}>
                                <label htmlFor='tel'>İrtibat No:</label>
                                <input value={formik.values.tel} onBlur={formik.handleBlur} onChange={formik.handleChange} className={S.textInput} name='tel' type="text" />
                            </div>
                            {formik.errors.tel && formik.touched.tel ?
                                <div className={S.inputRow}>
                                    <small className={S.errormessage}>{formik.errors.tel}</small>
                                </div>
                                : null}
                            {editMode === false ?
                                <div className={S.btnDiv}>
                                    <button type='submit' className={S.btnAdd}>Ekle</button>
                                    <button type="reset" className={S.btnCancel}>İptal</button>
                                </div>
                                :
                                <div className={S.btnDiv}>
                                    <button type='submit' className={S.btnAdd}>Düzenle</button>
                                    <button type="reset" className={S.btnCancel}>İptal</button>
                                </div>}
                        </form>

                    </div>
                </div>
                : null}
        </>
    )
}
