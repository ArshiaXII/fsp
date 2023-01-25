import React from 'react';
import * as S from "./styled";
import Image from 'next/image';
import Link from 'next/link';
import AddBasketBtn from './components/addBasketBtn';

export default function ProductCard({product}) {

    return (
        <div key={product.id} className={S.mainDiv}>
            <Link href={`/product/${product.id}`}>
                <div className={S.productInfo}>
                    <div className={S.imageDiv}>
                        <Image src={`${product.images[0]}`} width={175} height={175} alt="resm" />
                    </div>
                    <h3 className={S.title}>
                        {product.title.length < 40 ? product.title : `${product.title.slice(0,40)}...`}
                    </h3>
                </div>
            </Link>
            <div className={S.bottomDiv}>
                <div className={S.discount}>
                    %{product.reducedrate}
                </div>
                <div className={S.prices}>
                    <h4 className={S.reducedPrice}>
                        {product.reducedprice},00 ₺
                    </h4>
                    <h4 className={S.realPrice}>
                        {product.price},00 ₺
                    </h4>
                </div>
                <AddBasketBtn product={product} />
            </div>
        </div>
    )
}
