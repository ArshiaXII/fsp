import React from 'react';
import BasketItem from './components';
import * as S from "./styled";
import { AiOutlineGift } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import ProductEvents from './components/productEvents';


export default function ProductSortInfo({ product }) {




    return (
        <div className={S.mainDiv}>
            <div className={S.pricing}>
                <h2 className={S.price}>{product.totalprice},00 TL</h2>
                <h4 className={S.installment}><span className={S.installmentPrice}>{product.reducedprice},00 TL</span> KDV hariç fiyatıdır!</h4>
            </div>
            <div className={S.quickInfos}>
                <div>
                    <div className={S.quickInfo}>Kategori </div>
                    <div className={S.quickInfo}>Marka</div>
                    <div className={S.quickInfo}>Stok Kodu</div>
                </div>
                <div>
                    <div className={S.quickInfo}>:</div>
                    <div className={S.quickInfo}>:</div>
                    <div className={S.quickInfo}>:</div>
                </div>
                <div>
                    <div className={S.quickInfoValue}>{product.type} </div>
                    <div className={S.quickInfoValue}>{product.brand}</div>
                    <div className={S.quickInfoValue}>{product.id}</div>
                </div>
            </div>
            <BasketItem />
            <div className={S.deliveryInfos}>
                <div className={S.deliveryInfo}>
                    <MdDeliveryDining className='text-3xl text-customRed' />
                    <h5 className={S.deliveryInfoTitle}>Stoktan Hızlı Gönderi</h5>
                </div>
                <div className={S.deliveryInfo}>
                    <AiOutlineGift className='text-3xl text-customRed' />
                    <h5 className={S.deliveryInfoTitle}>Tüm Türkiye’ye Ücretsiz Kargo</h5>
                </div>
            </div>
            <ProductEvents product={product} />
        </div>
    )
}
