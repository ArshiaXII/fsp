"use client"
import React    from 'react';
import * as S from "./styled";

export default function CollapseMenu() {

    const handleOnBlur = () => {
        const collapselist = document.getElementById("collapselist");
        collapselist.classList.toggle("hidden");

    }

    return (
                <ul className={S.items}>
                    <li onClick={handleOnBlur} className={S.item}>İşlemciler</li>
                    <li onClick={handleOnBlur} className={S.item}>Ekran Kartları</li>
                    <li onClick={handleOnBlur} className={S.item}>Anakartlar</li>
                    <li onClick={handleOnBlur} className={S.item}>Depolama Birimleri</li>
                    <li onClick={handleOnBlur} className={S.item}>Çevre Birimleri</li>
                </ul>
    )
}
