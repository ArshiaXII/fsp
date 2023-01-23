import React from 'react'
import Content from './components/content';
import Path from './components/path';
import Title from './components/title';
import * as S from "./styled"


export const productsFetch = async () => {
  const res = await fetch(`https://amber-goat-garb.cyclic.app/products/`);
  return await res.json();
}

export const productFetch = async (productId) => {
  const res = await fetch(`https://amber-goat-garb.cyclic.app/products/${productId}`);
  return await res.json();
} 



 async function ProductPage ({params}) {

  const product = await productFetch(params.productId);


  return (
    <div className={S.mainDiv}>
      <Path product={product} />
      <Title product={product} />
      <Content product={product} />
    </div>
  )
}



export default ProductPage;


export async function generateStaticParams() {
  console.log("gellommmmaaaaaaaaaaa")
    const products = await productsFetch();

    return products.map((product) => ({productId: `${product.id}`}))
}

