import React from 'react'
import { AiOutlineComment } from 'react-icons/ai';
import { BsBasket } from 'react-icons/bs';
import * as S from "./styled"

export default function RatingButtons({ setEditorView, sendState }) {

  const handleEditorView = () => {
    if (sendState === true) {
      return false;
    } else {
      setEditorView((prev) => !prev)
    }

  }

  return (
    <div className={S.mainDiv}>
      <button onClick={() => handleEditorView() } className={S.button1}><AiOutlineComment /> Değerlendirme Yap</button>
      <button className={S.button2}><BsBasket /> Sepete Ekle</button>
    </div>
  )
}
