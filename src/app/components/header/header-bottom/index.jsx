"use client"
import React, { useState } from 'react';
import * as S from "./styled";

export default function HeaderBottom() {

    const [menuVisibility,setMenuVisibility] = useState(false);

    

    const handleOnBlur = () => {
        setMenuVisibility(true);
    }

    const handleOnLeave = () => {
        setMenuVisibility(false);
    }

    return (
        <div className={S.rows}>
            <div className={S.row}>
                <div className={S.content}>
                    <ul className={S.items}>
                        <li onMouseOver={handleOnBlur} onMouseLeave={handleOnLeave} className={S.item}>İşlemciler</li>
                        <li onMouseOver={handleOnBlur} onMouseLeave={handleOnLeave} className={S.item}>Ekran Kartları</li>
                        <li onMouseOver={handleOnBlur} onMouseLeave={handleOnLeave} className={S.item}>Anakartlar</li>
                        <li onMouseOver={handleOnBlur} onMouseLeave={handleOnLeave} className={S.item}>Depolama Birimleri</li>
                        <li onMouseOver={handleOnBlur} onMouseLeave={handleOnLeave} className={S.item}>Çevre Birimleri</li>
                    </ul>
                    
                </div>

                <div className={`${S.row2} ${menuVisibility === false ? "lg:hidden" : ""} `}>
                    <div className={S.content2} >
                        <div className='px-6 py-4 bg-customLightGray flex gap-x-12  '> 
                                <ul>
                                    <li>Lorem, ipsum.</li>
                                    <li>Modi, cupiditate.</li>
                                    <li>Non, a.</li>
                                    <li>Eveniet, tenetur.</li>
                                    <li>Dolorem, aspernatur!</li>
                                </ul>
                                <ul>
                                    <li>Lorem, ipsum.</li>
                                    <li>Modi, cupiditate.</li>
                                    <li>Non, a.</li>
                                    <li>Eveniet, tenetur.</li>
                                    <li>Dolorem, aspernatur!</li>
                                </ul>
                                <ul>
                                    <li>Lorem, ipsum.</li>
                                    <li>Modi, cupiditate.</li>
                                    <li>Non, a.</li>
                                    <li>Eveniet, tenetur.</li>
                                    <li>Dolorem, aspernatur!</li>
                                </ul>
                        </div>
                    </div>
                </div>

                
            </div>


        </div>
    )
}
