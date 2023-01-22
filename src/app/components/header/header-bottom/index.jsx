
import React from 'react';
import CollapseMenu from './components/collapseMenu';
import * as S from "./styled";

export default function HeaderBottom() {




    return (

        <div className={S.rows}>
            <div className={S.row}>
                <div className={S.content}>
                    <CollapseMenu />
                </div>
                <div  className={S.row2}>
                    <div id="collapselist" className={S.content2} >
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


    )
}
