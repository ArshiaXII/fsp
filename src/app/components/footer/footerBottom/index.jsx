import React from 'react';
import * as S from "./styled";
import {AiFillLock} from "react-icons/ai"
import {FaCcVisa} from "react-icons/fa"
import {MdSecurity} from "react-icons/md"

export default function FooterBottom() {
    return (
        <div className={S.mainDiv}>
            <div className={S.top}>
                <div className={S.text}>
                    © Tüm hakları saklıdır. Kredi kartı bilgileriniz 256bit SSL sertifikası ile korunmaktadır.
                </div>
                <div className={S.icons}>
                    <AiFillLock/>
                    <FaCcVisa />
                    <MdSecurity />
                </div>
            </div>
            <div className={S.bottom}>
                Ahmet Benan Akkaya © © ©
            </div>
        </div>
    )
}
