import React from 'react';
import { BiBasket, BiPurchaseTag, BiRepost } from 'react-icons/bi';
import { FiBook } from 'react-icons/fi';
import * as S from "./styled"

export default function MainpageContent() {
  return (
    <div className={S.mainDiv}>
      <div className={S.pageTitle}>
        <h1>Hesabım</h1>
      </div>
      <div className={S.content}>
        <div className={S.contentItem}>
          <div className={S.contentIcon}>
            <FiBook />
          </div>
          <div className={S.contentTitle}>
            Adres Defteri
          </div>
        </div>
        <div className={S.contentItem}>
          <div className={S.contentIcon}>
            <BiPurchaseTag />
          </div>
          <div className={S.contentTitle}>
            Siparişlerim
          </div>
        </div>
        <div className={S.contentItem}>
          <div className={S.contentIcon}>
            <BiRepost />
          </div>
          <div className={S.contentTitle}>
            İade İşlemleri
          </div>
        </div>
        <div className={S.contentItem}>
          <div className={S.contentIcon}>
            <BiBasket />
          </div>
          <div className={S.contentTitle}>
            Alışveriş Sepetim
          </div>
        </div>
      </div>
    </div>
  )
}
