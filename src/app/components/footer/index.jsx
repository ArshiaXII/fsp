import React from 'react'
import FooterBottom from './footerBottom';
import FooterCenter from './footerCenter';
import FooterTop from './footerTop';
import * as S from "./styled";

export default function Footer() {
  return (
    <div className={S.mainDiv}>
        <FooterTop />
        <FooterCenter />
        <FooterBottom />
    </div>
  )
}
