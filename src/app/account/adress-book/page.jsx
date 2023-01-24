"use client"
import { UsersContext } from '@/context/User';
import React, { useContext, useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import AddAdressModal from './components';
import AdressButtons from './components/adressButtons';
import * as S from "./styled";

export default function AddressBookPage() {

    const { loginnedUser } = useContext(UsersContext);
    const [modalVisibility, setModalVisibility] = useState(false);

    const [formValues, setFormValues] = useState({ title: "", adress: "", country: "", city: "", state: "", tel: "" });
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={S.mainDiv}>
            <AddAdressModal editMode={editMode} setEditMode={setEditMode} formValues={formValues} setFormValues={setFormValues} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} />
            <div className={S.pageTitle}>
                <h1>Adres Defterim</h1>
            </div>
            <div className={S.content}>
                {loginnedUser.adresses?.map((adress, ind) => (
                    <div key={ind} className={S.contentItemDiv}>
                        <div className={S.adressTitle}>Adres Tanımı: <span className={S.adressValue}>{adress.title}</span></div>
                        <div className={S.adressContent}>
                            <div className={S.adressContentTitle}>{adress.firstname} {adress.lastname}</div>
                            <div className={S.adressContentTitle}>Adres : <span className={S.adressValue}>{adress.adress.slice(0, 10)}..., {adress.state} / {adress.city} / {adress.country}</span></div>
                            <div className={S.adressContentTitle}>Cep Telefonu: <span className={S.adressValue}>+90 {adress.tel}</span></div>
                        </div>
                        <AdressButtons setFormValues={setFormValues} setModalVisibility={setModalVisibility} setEditMode={setEditMode} adress={adress} />
                    </div>
                ))}
                <div className={S.contentItemDiv}>
                    <div className={S.newAdressDiv}>
                        <button onClick={() => setModalVisibility(true)} className={S.newAdressBtn}><FaPlusCircle /> Yeni Adres Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
