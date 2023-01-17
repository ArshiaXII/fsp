import React from 'react'
import Content from './components/content';
import Path from './components/path';
import Title from './components/title';
import * as S  from "./styled"

export default function ProductPage() {
  return (
    <div className={S.mainDiv}>
      <Path />
      <Title />
      <Content />
    </div>
  )
}
