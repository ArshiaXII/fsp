"use client"
import { UsersContext } from '@/context/User';
import React, { useContext, useEffect, useState } from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai';
import BasketItem from './components/basketItem';

import * as S from "./styled";

export default function BasketPage() {

    const { userBasket, loginnedUser, fetchLoginnedUserData } = useContext(UsersContext);

    const [totalPrice, setTotalPrice] = useState(0);
    const [kdvlessPrice, setKdvlessPrice] = useState(0);
    const [kdvPrice, setKdvPrice] = useState(0);

    useEffect(() => {
        let kdvless = 0;
        let kdv = 0;
        let total = 0;
        userBasket.forEach(e => {
            kdvless += Number(e.count * e.product.reducedprice);
            kdv += Number(e.count * e.product.kdvprice);
            total += Number(e.count * e.product.totalprice);
        });
        setTotalPrice(total);
        setKdvlessPrice(kdvless);
        setKdvPrice(kdv);
    }, [userBasket])


    const completeShopping = async () => {
        let userOrders = loginnedUser.orders;
        let orderItems = [];
        userBasket.forEach((e) => {
            orderItems.push({count: e.count, product: e.product.id})
        })
        let newOrder = [];
        newOrder.push({id: 1, status: "Hazırlanıyor"});
        newOrder.push(orderItems)

        userOrders.push(newOrder);
        await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orders: newOrder })
        })
        fetchLoginnedUserData(loginnedUser.id)
    }

    return (
        <div className={S.mainDiv}>
            {userBasket.length > 0 ?
                <div className={S.container}>
                    <div className={S.basketDetailDiv}>
                        <div className={S.basketDetailTitle}>
                            <h1>Sepet Detayı</h1>
                        </div>
                        {userBasket.sort((a, b) => a.product.id > b.product.id ? 1 : -1).map((item) => (
                            <BasketItem key={item.product.id} item={item} />
                        ))}

                    </div>
                    <div className={S.basketStatementDiv}>
                        <div className={S.basketStatementTitle}>
                            <h1>Sepet Özeti</h1>
                        </div>
                        <div className={S.basketStatementCalculations}>
                            <div className={S.basketStatementCalculation}>Ara Toplam <span className={S.basketStatementCalculationValue}>{kdvlessPrice},00 TL</span></div>
                            <div className={S.basketStatementCalculation}>KDV <span className={S.basketStatementCalculationValue}>{kdvPrice},00 TL</span></div>
                            <div className={S.basketStatementCalculation}>KDV Dahil <span className={S.basketStatementCalculationValue}>{totalPrice},00 TL</span></div>
                        </div>
                        <div>
                            <div className={S.basketStatementTotalPrice}>Toplam <span className={S.basketStatementCalculationValue}>{totalPrice},00 TL</span></div>
                        </div>
                        <div>
                            <button onClick={completeShopping} className={S.basketStatementBtn}>Alışverişi Tamamla</button>
                        </div>

                    </div>
                </div>
                :
                <div className={S.emptyBasketContainer}>
                    <AiFillExclamationCircle className={S.emptyIcon} />
                    <h2 className={S.emptyMessage}>Alışveriş sepetinizde ürün bulunmamaktadır.</h2>
                </div>
            }
        </div>
    )
}
