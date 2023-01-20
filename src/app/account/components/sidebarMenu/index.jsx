import Link from 'next/link';
import React from 'react';
import { BiPurchaseTag, BiRepost } from 'react-icons/bi';
import { FiBook, FiHeart, FiHome, FiLogOut, FiUser } from 'react-icons/fi';
import * as S from "./styled";

export default function SidebarMenu() {


  return (
    <div className={S.mainDiv}>
      <h2 className={S.sidebarTitle}>Kullanıcı Menüsü</h2>

      <div className={S.welcomeBox}>
        <h4 className={S.welcomeTitles}>Hoşgeldiniz</h4>
        <h4 className={S.welcomeTitles}>Damla Tezcan</h4>
        <h5>Son Giriş: <span>19-01-2023 17:06:51</span></h5>
      </div>


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
