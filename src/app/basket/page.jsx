import Image from 'next/image'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import * as S from "./styled";

export default function BasketPage() {
    return (
        <div className={S.mainDiv}>
            <div className={S.container}>
                <div className={S.basketDetailDiv}>
                    <div className={S.basketDetailTitle}>
                        <h1>Sepet Detayı</h1>
                    </div>
                    <div className={S.productDiv}>
                        <div className={S.productImageDiv}>
                            <Image width={85} height={85} src="https://st2.myideasoft.com/idea/hz/44/myassets/products/776/joseph-joseph-70517-flex-smart-tuvalet-fircasi-paslanmaz-celik-7898_min.jpeg?rev=1673848298" alt="resm" />
                        </div>
                        <div className={S.productDetailDiv}>
                            <div className={S.productDetailTop}>
                                <div className={S.productTitle}>
                                    Joseph Joseph 70517 Flex Smart Tuvalet Fırçası - Paslanmaz Çelik
                                </div>
                                <div className={S.productCounter}>
                                    <div className={S.productCounterMain}>
                                        <div className={S.productCounterSign}>
                                            -
                                        </div>
                                        <div className={S.productCounterNumber}>
                                            <div>1</div>
                                            <div className={S.productCounterTitle}>Adet</div>
                                        </div>
                                        <div className={S.productCounterSign}>
                                            +
                                        </div>
                                    </div>
                                    <div className={S.productPriceDiv}>
                                        <div className={S.productPrice}>804,24 TL</div>
                                        <div>+ KDV % 18</div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <button className={S.productRemoveBtn}><span><BsTrash /></span>Sepetten Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={S.basketStatementDiv}>
                    <div className={S.basketStatementTitle}>
                        <h1>Sepet Özeti</h1>
                    </div>
                    <div className={S.basketStatementCalculations}>
                        <div className={S.basketStatementCalculation}>Ara Toplam <span className={S.basketStatementCalculationValue}>6.735,59 TL</span></div>
                        <div className={S.basketStatementCalculation}>KDV <span className={S.basketStatementCalculationValue}>1.212,41 TL</span></div>
                        <div className={S.basketStatementCalculation}>KDV Dahil <span className={S.basketStatementCalculationValue}>7.948,00 TL</span></div>
                    </div>
                    <div>
                        <div className={S.basketStatementTotalPrice}>Toplam <span className={S.basketStatementCalculationValue}>7.948,00 TL</span></div>
                    </div>
                    <div>
                        <button className={S.basketStatementBtn}>Alışverişi Tamamla</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
