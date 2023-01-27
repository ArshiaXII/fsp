import React from 'react';

import { RiEmotionUnhappyLine } from 'react-icons/ri';
import ProductCard from './productCard';
import * as S from "./styled";

const fetchProducts = async (params) => {

  if (params === undefined) {
    params = "";
  }
  const res = await fetch(`https://amber-goat-garb.cyclic.app/products${params}`);
  return res.json();
}



export default async function Products({ productFilt }) {
  const data = await fetchProducts(productFilt);

  return (

    <>
      {data?.length > 0 ?
        <div className={S.mainDiv}>
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        :
        <div className='flex flex-col gap-y-4 justify-center items-center w-full p-3 py-10'>
          <RiEmotionUnhappyLine className='text-6xl text-customRed' />
          <h4 className='text-2xl text-gray-400'>Aradığınız kriterde ürün bulunamadı!</h4>
        </div>
      }
    </>
  )}