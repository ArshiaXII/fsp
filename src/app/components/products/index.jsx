import React from 'react';
import ProductCard from './productCard';
import * as S from "./styled";



export default function Products() {
  return (
    <div className={S.mainDiv}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}
