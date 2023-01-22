import React from 'react'
import Content from './components/content';
import Path from './components/path';
import Title from './components/title';
import * as S  from "./styled"

export default async function ProductPage({params}) {

  const id = params.productId;

  const fetchProduct = async () => {
    const data = await fetch(`https://amber-goat-garb.cyclic.app/products/${id}`);
    return data.json();
  };

  const product = await fetchProduct();

  return (
    <div className={S.mainDiv}>
      <Path product={product} />
      <Title product={product} />
      <Content  product={product}/>
    </div>
  )
}
