"use client"
import React from 'react'

export const ProductsContext = React.createContext();

export default function Products(props) {


  


    const values = {
        deneme:"merhaba"
    };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  )
}
