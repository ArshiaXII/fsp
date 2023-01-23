import Link from 'next/link';
import React from 'react';
import * as S from "./styled";

export default function Path({product}) {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <Link className={S.link} href="/">Ana Sayfa</Link>
                /
                <Link className={S.link} href="/">{product.type}</Link>
                /
                <Link className={S.link} href="/">{product.brand}</Link>
            </div>
        </div>
    )
}
