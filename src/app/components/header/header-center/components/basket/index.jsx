import React from 'react'
import * as S  from "./styled"
import { BsFillBasket3Fill } from 'react-icons/bs';

export default function BasketComp() {
    return (
        <div className={S.mainDiv}>
            <div className={S.basketArea}>
                <div className={S.basket}><BsFillBasket3Fill /> <span className={S.basketCount}>0</span></div>
            </div>
            <div className={S.priceArea}>
                <h5>Toplam  - <span className={S.price}>0,00 TL</span></h5>
            </div>
        </div>
    )
}
