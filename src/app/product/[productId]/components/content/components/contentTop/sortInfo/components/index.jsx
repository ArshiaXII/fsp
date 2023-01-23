"use client"
import React, { useState } from 'react';
import * as S from "./styled";
import { BsFillBasket3Fill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';


export default function BasketItem() {

    const [basketCount, setBasketCount] = useState(1);

    return (
        <div className={S.mainDiv}>
            <div>
                <input className={S.input} type="number" value={basketCount} onChange={(e) => setBasketCount(e.target.value)} />
            </div>
            <div className={S.btnsDiv}>
                <button className={S.addBasketBtn}><BsFillBasket3Fill /> SEPETE EKLE</button>
                <button className={S.buyNowBtn}><MdPayment /> HEMEN AL</button>
            </div>
        </div>
    )
}
