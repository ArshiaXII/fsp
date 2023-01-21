import React from 'react';
import ProductCard from './productCard';
import * as S from "./styled";

const fetchProducts = async () => {
  const res = await fetch("https://amber-goat-garb.cyclic.app/products");
  return res.json();
}



export default async function Products() {

  const data = await fetchProducts();

  return (
    <div className={S.mainDiv}>
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}
