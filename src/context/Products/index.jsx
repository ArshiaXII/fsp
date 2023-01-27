"use client"
import React, { useState } from 'react'

export const ProductsContext = React.createContext();

export default function Products(props) {

  const [listingComments, setListingComments] = useState([]);


  const updateProduct = async (id) => {

    setListingComments(data.comments);
  }


    const values = {
      updateProduct,
      listingComments,
      setListingComments
    };

  return (
    <ProductsContext.Provider value={values}>
      {props.children}
    </ProductsContext.Provider>
  )
}
