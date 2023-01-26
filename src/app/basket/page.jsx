"use client"
import { UsersContext } from '@/context/User';
import React, { useContext, useEffect, useState } from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai';
import BasketItem from './components/basketItem';
import * as S from "./styled";


export default function BasketPage() {



    const { isLoginned, userBasket, completeShopping } = useContext(UsersContext);

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
                            {isLoginned === true ?
                                <button onClick={completeShopping} className={S.basketStatementBtn}>Alışverişi Tamamla</button>
                                :
                                <h5 className={S.loginMessage}>
                                    Sipariş vermek için lütfen giriş yapınız!
                                </h5>}
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
