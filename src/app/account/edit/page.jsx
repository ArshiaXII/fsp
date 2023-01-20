import React from 'react';
import * as S from "./styled"

export default function EditPage() {
    return (
        <div className={S.mainDiv}>
            <div className={S.pageTitle}>
                <h1>Bilgilerimi Düzenle</h1>
            </div>
            <div className={S.content}>
                <h3 className={S.formTitle}>Üye Bilgileri</h3>
                <div className={S.inputDiv}>
                    <label htmlFor='ad'>Adı <span className={S.labelSpan}>*</span></label>
                    <input className={S.input} name="ad" type="text" />
                </div>
                <div className={S.inputDiv}>
                    <label htmlFor='soyad'>Soyadı <span className={S.labelSpan}>*</span></label>
                    <input className={S.input} name="soyad" type="text" />
                </div>
                <div className={S.inputDiv}>
                    <label htmlFor='email'>Email <span className={S.labelSpan}>*</span></label>
                    <input className={S.input} name="email" type="email" />
                </div>
                <div className={S.inputDiv}>
                    <label htmlFor='birthday'>Doğum Tarihi</label>
                    <input className={S.input} name="birthday" type="date" />
                </div>
                <div className={S.inputDiv}>
                    <label htmlFor='birthday'>Cinsiyeti</label>
                    <div className={S.radioInputDiv}>
                        <div><input type="radio" name="gender" value="female" /> <label>Kadın</label></div>
                        <div><input type="radio" name="gender" value="male" /> <label>Erkek</label></div>
                        <div><input type="radio" name="gender" value="unknown" /> <label>*</label></div>
                    </div>
                </div>
                <div className={S.inputDiv}>
                    <label htmlFor='telno'>Cep Telefonu</label>
                    <input className={S.input} name="telno" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                <div className={S.inputDiv}>
                    <label htmlFor='tcno'>T.C Kimlik No</label>
                    <input className={S.input} name="tcno" type="text" />
                </div>
                <div className={S.buttonDiv}>
                    <button className={S.cancelBtn}>İptal</button>
                    <button className={S.confirmBtn}>Onayla</button>
                </div>

            </div>
        </div>
    )
}
