"use client"
import React, { useContext, useState } from 'react';
import * as S from "./styled";
import { BsFillBasket3Fill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import { UsersContext } from '@/context/User';


export default function BasketItem({ product }) {

    const [basketCount, setBasketCount] = useState(1);
    const { isLoginned, userBasket, setUserBasket, handleAddBasket, completeShopping } = useContext(UsersContext);



    return (
        <div className={S.mainDiv}>
            <div>
                <input className={S.input} type="number" value={basketCount} onChange={(e) => setBasketCount(e.target.value)} />
            </div>
            <div className={S.btnsDiv}>
                <button onClick={() => handleAddBasket(product, basketCount)} className={S.addBasketBtn}><BsFillBasket3Fill /> SEPETE EKLE</button>
            </div>
        </div>
    )
}
