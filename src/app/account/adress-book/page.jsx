import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import * as S from "./styled";

export default function AddressBookPage() {
  return (
<div className={S.mainDiv}>
            <div className={S.pageTitle}>
                <h1>Adres Defterim</h1>
            </div>
            <div className={S.content}>
               <div className={S.contentItemDiv}>
                    <div className={S.adressTitle}>Adres Tanımı: <span className={S.adressValue}>Ev</span></div>
                    <div className={S.adressContent}>
                        <div className={S.adressContentTitle}>Damla Tezcan</div>
                        <div className={S.adressContentTitle}>Adres : <span className={S.adressValue}>atatürk caddesi,şirin apartmanı, no:17, Sarıyer / İstanbul / Türkiye</span></div>
                        <div className={S.adressContentTitle}>Cep Telefonu: <span className={S.adressValue}>+90 (536) 696 69 98</span></div>
                    </div>
                    <div className={S.adressButtonDiv}>
                        <button className={S.btnEdit}>Düzenle</button>
                        <button className={S.btnDelete}>Sil</button>
                    </div>
               </div>
               <div className={S.contentItemDiv}>
                    <div className={S.newAdressDiv}>
                        <button className={S.newAdressBtn}><FaPlusCircle /> Yeni Adres Ekle</button>
                    </div>
               </div>
            </div>
        </div>
  )
}
