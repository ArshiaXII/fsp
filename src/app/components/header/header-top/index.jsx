import React from 'react';
import * as S from './styled';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';

function HeaderTop() {

  return (
    <div className={S.row}>
      <div className={S.content}>
        <span className={S.user}>
          <BiUser />
        </span>
        <Link href="/login">Üye Girişi</Link>

        <Link href="/uye-ol">Yeni Üyelik</Link>
      </div>
    </div>
  )
}


export default HeaderTop;
