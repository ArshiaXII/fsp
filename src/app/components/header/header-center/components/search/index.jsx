import React from 'react';
import * as S from "./styled";

export default function SearchComp() {
  return (
    <div className={S.div.class}>
        <input placeholder={S.input.placeholder} className={S.input.class}/>
        <button className={S.button.class}>ARA</button>
    </div>
  )
}
