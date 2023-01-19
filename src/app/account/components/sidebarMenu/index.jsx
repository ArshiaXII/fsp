import React from 'react';
import { BiPurchaseTag, BiRepost } from 'react-icons/bi';
import { FiBook, FiHeart, FiHome, FiUser } from 'react-icons/fi';
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

        <div>
            <h3 classname={S.listTitle}>Hesabım</h3>

            <ul classname={S.list}>
                <li className={S.listItem}><span><FiUser/></span>Üye Bilgilerim</li>
                <li className={S.listItem}><span><FiBook/></span>Adres Defteri</li>
                <li className={S.listItem}><span><BiPurchaseTag/></span>Siparişlerim</li>
                <li className={S.listItem}><span><BiRepost/></span>İade İşlemleri</li>
                <li className={S.listItem}><span><FiHeart/></span>Favori Ürünlerim</li>
                <li className={S.listItem}><span><FiUser/></span>Güvenli Çıkış</li>
            </ul>
        </div>  

    </div>
  )
}
