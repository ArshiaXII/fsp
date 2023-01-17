import React from 'react';
import * as S from "./styled";
import { BsFillBasket3Fill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
    return (
        <div className={S.mainDiv}>
            <Link href="/product/1">
                <div className={S.productInfo}>
                    <div className={S.imageDiv}>
                        <Image src="https://st.myideasoft.com/idea/hz/44/myassets/products/024/kitchenaid-5kfc0516eer-empire-red-1-19-litre-mutfak-robotu-4903_min.jpeg?revision=1673085675" width={175} height={175} alt="resm" />
                    </div>
                    <h3 className={S.title}>
                        KitchenAid 5KFC0516EER Empire Red 1,19 Litre Mutfak Robotu
                    </h3>
                </div>
            </Link>
            <div className={S.bottomDiv}>
                <div className={S.discount}>
                    %29
                </div>
                <div className={S.prices}>
                    <h4 className={S.reducedPrice}>
                        2.499,00 ₺
                    </h4>
                    <h4 className={S.realPrice}>
                        3.499,00 ₺
                    </h4>
                </div>
                <div className={S.addBasket}>
                    <BsFillBasket3Fill />
                </div>
            </div>
        </div>
    )
}
