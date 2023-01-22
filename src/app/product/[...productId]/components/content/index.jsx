import React, { useContext } from 'react'
import ContentBottom from './components/contentBottom/longInfo'
import ContentTop from './components/contentTop';
import * as S from "./styled";

export default function Content({product}) {

  return (
    <div className={S.mainDiv}>
        <ContentTop product={product} />
        <ContentBottom  product={product} />
    </div>
  )
}
