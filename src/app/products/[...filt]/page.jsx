import Products from '@/app/components/products';
import React, { cloneElement } from 'react';
import ProductsFilter from '../components/filter';
import * as S from "./styled";

export default function ProductsParams({ params }) {

    let productFilt = "";


    if (params !== undefined) {
       
        if (params.filt?.length === 1) {
            productFilt = `?type_like=${params.filt[0]}`;
        }
        if (params.filt?.length === 2 && params.filt[0] === "search") {
            productFilt = `?title_like=${params.filt[1]}`;


        }
        if (params.filt?.length === 2 && params.filt[0] !== "search" ) {
            productFilt = `?type_like=${params.filt[0]}&brand_like=${params.filt[1]}`;

        }
    }

    console.log(productFilt);

    return (
        <div className={S.container}>
            {/* <ProductsFilter /> */}
            <Products productFilt={productFilt} />
        </div>
    )
}
