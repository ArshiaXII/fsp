"use client"
import React, { useContext } from 'react';
import * as S from "./styled";
import { BsTrash } from 'react-icons/bs'
import Image from 'next/image'
import { UsersContext } from '@/context/User';

export default function BasketItem({ item }) {

    const { userBasket, setUserBasket } = useContext(UsersContext);

    const handleDecrease = () => {
        if (item.count === 1) {
            var newBasket = userBasket.filter((e) => e.product.id !== item.product.id);
            setUserBasket(newBasket);
        }
        if (item.count > 1) {
            var newBasket = userBasket.filter((e) => e.product.id !== item.product.id);
            var targetItem = userBasket.filter((e) => e.product.id === item.product.id);
            targetItem[0].count = targetItem[0].count - 1;
            newBasket.push(targetItem[0]);
            setUserBasket(newBasket);
        }
    }

    const handleIncrease = () => {
        var newBasket = userBasket.filter((e) => e.product.id !== item.product.id);
        var targetItem = userBasket.filter((e) => e.product.id === item.product.id);
        targetItem[0].count = targetItem[0].count + 1;
        newBasket.push(targetItem[0]);
        setUserBasket(newBasket);
    }

    const handleDeleteItem = () => {
        var newBasket = userBasket.filter((e) => e.product.id !== item.product.id);
        setUserBasket(newBasket);
    }

    return (
        <div className={S.productDiv}>
            <div className={S.productImageDiv}>
                <Image width={85} height={85} src={item.product.images[0]} alt="resm" />
            </div>
            <div className={S.productDetailDiv}>
                <div className={S.productDetailTop}>
                    <div className={S.productTitle}>
                        {item.product.title}
                    </div>
                    <div className={S.productCounter}>
                        <div className={S.productCounterMain}>
                            <div onClick={handleDecrease} className={S.productCounterSign}>
                                -
                            </div>
                            <div className={S.productCounterNumber}>
                                <div>{item.count}</div>
                                <div className={S.productCounterTitle}>Adet</div>
                            </div>
                            <div onClick={handleIncrease} className={S.productCounterSign}>
                                +
                            </div>
                        </div>
                        <div className={S.productPriceDiv}>
                            <div className={S.productPrice}>{item.product.reducedprice},00 TL</div>
                            <div>+ KDV % 18</div>
                        </div>
                    </div>
                </div>
                <div >
                    <button onClick={handleDeleteItem} className={S.productRemoveBtn}><span><BsTrash /></span>Sepetten Sil</button>
                </div>
            </div>
        </div>
    )
}
