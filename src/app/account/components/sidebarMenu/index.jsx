import Link from 'next/link';
import React from 'react';
import { BiPurchaseTag, BiRepost } from 'react-icons/bi';
import { FiBook, FiHeart, FiHome, FiLogOut, FiUser } from 'react-icons/fi';
import WelcomeBox from './components/welcomeBox';
import * as S from "./styled";

export default function SidebarMenu() {


  return (
    <div className={S.mainDiv}>
      <h2 className={S.sidebarTitle}>Kullanıcı Menüsü</h2>


      <WelcomeBox />

      <h3 className={S.listTitle}>Hesabım</h3>

      <ul className={S.linkList}>
        <Link href="/account/edit"><li className={S.listItem}><span className={S.listSpan}><FiUser /></span>Üye Bilgilerim</li></Link>
        <Link href="/account/adress-book" ><li className={S.listItem}><span className={S.listSpan}><FiBook /></span>Adres Defteri</li> </Link>
        <Link href="/account/orders"><li className={S.listItem}><span className={S.listSpan}><BiPurchaseTag /></span>Siparişlerim</li></Link>
        <li className={S.listItem}><span className={S.listSpan}><BiRepost /></span>İade İşlemleri</li>
        <Link href="/account/favorites"><li className={S.listItem}><span className={S.listSpan}><FiHeart /></span>Favori Ürünlerim</li></Link>
        <li className={S.listItem}><span className={S.listSpan}><FiLogOut /></span>Güvenli Çıkış</li>
      </ul>


    </div>
  )
}
