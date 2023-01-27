"use client"
import Link from 'next/link';
import React    from 'react';
import * as S from "./styled";

export default function CollapseMenu() {

    // const handleOnBlur = () => {
    //     const collapselist = document.getElementById("collapselist");
    //     collapselist.classList.toggle("hidden");

    // }

    return (
                <ul className={S.items}>
                    <li className={S.item}><Link href="/products/işlemci">İşlemciler</Link></li>
                    <li className={S.item}><Link href="/products/ekran kartı">Ekran Kartları</Link></li>
                    <li className={S.item}><Link href="/products/anakart">Anakartlar</Link></li>
                    <li className={S.item}><Link href="/products/ram">Ramler</Link></li>
                    <li className={S.item}><Link href="/products/ssd">Depolama Birimleri</Link></li>
                </ul>
    )
}
