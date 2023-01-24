"use client"
import { UsersContext } from '@/context/User';
import React, { useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import * as S from "./styled";

export default function AddressBookPage() {

    const { loginnedUser } = useContext(UsersContext);


    return (
        <div className={S.mainDiv}>
            <div className={S.pageTitle}>
                <h1>Adres Defterim</h1>
            </div>
            <div className={S.content}>
                {loginnedUser.adresses?.map((adress,ind) => (
                    <div key={ind} className={S.contentItemDiv}>
                        <div className={S.adressTitle}>Adres Tanımı: <span className={S.adressValue}>{adress.title}</span></div>
                        <div className={S.adressContent}>
                            <div className={S.adressContentTitle}>{adress.firstname} {adress.lastname}</div>
                            <div className={S.adressContentTitle}>Adres : <span className={S.adressValue}>{adress.adress}, {adress.state} / {adress.city} / {adress.country}</span></div>
                            <div className={S.adressContentTitle}>Cep Telefonu: <span className={S.adressValue}>+90 {adress.tel}</span></div>
                        </div>
                        <div className={S.adressButtonDiv}>
                            <button className={S.btnEdit}>Düzenle</button>
                            <button className={S.btnDelete}>Sil</button>
                        </div>
                    </div>
                ))}
                <div className={S.contentItemDiv}>
                    <div className={S.newAdressDiv}>
                        <button className={S.newAdressBtn}><FaPlusCircle /> Yeni Adres Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
