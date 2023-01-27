"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as S from "./styled";

export default function SearchComp() {

  const route = useRouter();

  const [searchInput,setSearchInput] = useState("");

  const handleSearch = () => {
    let searchParam = `products/search/${searchInput}`;
    route.push(`/products/search/${searchInput}`)

  }

  return (
    <div className={S.div.class}>
        <input onChange={(e) => setSearchInput(e.target.value)} placeholder={S.input.placeholder} className={S.input.class}/>
        <button onClick={handleSearch} className={S.button.class}>ARA</button>
    </div>
  )
}
