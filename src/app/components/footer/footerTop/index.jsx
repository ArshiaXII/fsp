import React from 'react';
import * as S from "./styled";
import {FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi"

export default function FooterTop() {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <div className={S.col}>
                    <div className={S.title}>SOSYAL MEDYA</div>
                    <div className={S.medias}>
                        <div className={S.icon}>
                            <FiFacebook />
                        </div>
                        <div className={S.icon}>
                            <FiTwitter />
                        </div>
                        <div className={S.icon}>
                            <FiInstagram />
                        </div>
                    </div>
                </div>
                <div className={S.col}>
                    <div className={S.title}>E-BÜLTEN</div>
                    <div>
                        <input  className={S.input} type="text" />
                        <button  className={S.btn}>EKLE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
