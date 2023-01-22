import React from 'react';
import * as S from './styled';
import { BiUser } from 'react-icons/bi';
import SearchComp from "./components/search/index";
import BasketComp from './components/basket/index';
import CollapseMenu from './components/collaseMenu/index';
import CollapseMenuButton from './components/collapseMenuButton';

function HeaderCenter() {




  return (
      <div className={S.rows}>
        <div className={S.row}>
          <CollapseMenuButton />
          <div className={S.logo}>
            <h1 className={S.logo1}>tech<span className={S.logo2}>market</span></h1>
          </div>
          <div className={S.searchDiv}>
            <SearchComp />
          </div>
          <div className={S.btnsOfRight}>
            <div className={S.btnUser}><BiUser /></div>
            <BasketComp />
          </div>
        </div>
        <div id='collapsemenu' className='hidden'>
            <CollapseMenu />
        </div>
        <div className={S.searchRow}>
          <SearchComp />
        </div>
      </div>
  
  )
}


export default HeaderCenter;
