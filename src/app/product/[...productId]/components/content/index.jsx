import React from 'react'
import ContentBottom from './components/contentBottom/longInfo'
import ContentTop from './components/contentTop';
import * as S from "./styled";

export default function Content() {
  return (
    <div className={S.mainDiv}>
        <ContentTop />
        <ContentBottom />
    </div>
  )
}
