import React from 'react';
import * as S from "./styled"

export default function Title({product}) {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <h1>{product.title}</h1>
            </div>
        </div>
    )
}
