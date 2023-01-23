import React from 'react';
import ProductImages from './imageList';
import ProductSortInfo from './sortInfo';
import * as S from "./styled"

export default function ContentTop({product}) {
  return (
    <div className={S.mainDiv}>
        <ProductImages product={product} />
        <ProductSortInfo product={product}/>
    </div>
  )
}
