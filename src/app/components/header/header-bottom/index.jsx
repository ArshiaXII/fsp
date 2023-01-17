"use client"
import React, { useState } from 'react';
import * as S from "./styled";

export default function HeaderBottom() {

    const [menuVisibility,setMenuVisibility] = useState(false);

    

    const handleOnBlur = () => {
     setMenuVisibility(!menuVisibility);
       
    }


    return (
        <>
        <div className={S.rows}>
            <div className={S.row}>
                <div className={S.content}>
                    <ul className={S.items}>
                        <li onClick={handleOnBlur} className={S.item}>İşlemciler</li>
                        <li onClick={handleOnBlur} className={S.item}>Ekran Kartları</li>
                        <li onClick={handleOnBlur} className={S.item}>Anakartlar</li>
                        <li onClick={handleOnBlur} className={S.item}>Depolama Birimleri</li>
                        <li onClick={handleOnBlur} className={S.item}>Çevre Birimleri</li>
                    </ul>
                    
                </div>


                <div className={`${S.row2} ${menuVisibility === false ? "lg:hidden" : ""} `}>
                    <div className={S.content2} >
                        <div className={S.megaList}> 
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



        </>
    )
}
