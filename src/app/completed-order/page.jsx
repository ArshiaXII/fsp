import Link from 'next/link';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import * as S from "./styled";

export default function CompletedOrderPage() {
    return (
        <div className={S.mainDiv}>

            <div className={S.content}>
                <div className={S.emptyOrderContainer}>
                    <AiFillCheckCircle className={S.emptyIcon} />
                    <h2 className={S.emptyMessage}>Tebrikler, başarıyla siparişinizi oluşturduk!</h2>
                    <Link className={S.link} href="/account/orders">Siparişlerime Git</Link>
                </div>
            </div>
        </div>
    )
}
