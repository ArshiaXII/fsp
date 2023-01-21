import Link from 'next/link';
import React from 'react';
import * as S from "./styled";

export default function Path({product}) {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <Link href="/">Ana Sayfa</Link>
                -
                <Link href="/">{product.type}</Link>
                -
                <Link href="/">{product.brand}</Link>
                -
                <Link href="/">{product.title}</Link>
            </div>
        </div>
    )
}
