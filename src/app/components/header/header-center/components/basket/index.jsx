"use client"
import React, { useContext, useEffect, useState } from 'react'
import * as S  from "./styled"
import { BsFillBasket3Fill } from 'react-icons/bs';
import Link from 'next/link';
import { UsersContext } from '@/context/User';

export default function BasketComp() {

    const {userBasket} = useContext(UsersContext);
    const [totalPrice,setTotalPrice] = useState(0);
    const [itemCount,setItemCount] = useState(0);

    useEffect(() => {
        let total = 0;
        let count = 0;
        userBasket.forEach(e => {
            total += Number(e.count * e.product.totalprice);
            count += Number(e.count);
        });
        setTotalPrice(total);
        setItemCount(count);
    },[userBasket])

    return (
        <Link href="/basket" className={S.mainDiv}>
            <div className={S.basketArea}>
                <div className={S.basket}><BsFillBasket3Fill /> <span className={S.basketCount}>{itemCount}</span></div>
            </div>
            <div className={S.priceArea}>
                <h5>Toplam  - <span className={S.price}>{totalPrice},00 TL</span></h5>
            </div>
        </Link>
    )
}
