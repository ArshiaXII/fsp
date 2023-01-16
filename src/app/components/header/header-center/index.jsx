"use client"
import React from 'react';
import * as S from './styled';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import SearchComp from "./components/search/index";
import BasketComp from './components/basket';

function HeaderCenter() {

  return (
    <div className={S.rows}>
    <div className={S.row}>
      <div className={S.btnMenu}>
        <AiOutlineMenu/>
      </div>
      <div className={S.logo}>
        <h1 className={S.logo1}>tech<span className={S.logo2}>market</span></h1>
      </div>
      <div className={S.searchDiv}>
        <SearchComp />
      </div>
      <div className={S.btnsOfRight}>
          <div className={S.btnUser}><BiUser/></div>
          <BasketComp />
      </div>
    </div>
    <div className={S.searchRow}>
        <SearchComp />
    </div>
    </div>
  )
}


export default HeaderCenter;
