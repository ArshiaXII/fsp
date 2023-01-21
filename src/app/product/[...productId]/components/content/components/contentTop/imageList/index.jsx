"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import * as S from "./styled"

export default function ProductImages({product}) {

    const images = product.images;

    const [selectedImage,setSelectedImage] = useState(0);


  return (
    <div className={S.mainDiv}>
        <div className={S.imageBig}>
            <Image src={images[selectedImage]} alt="resm" width={500} height={500} />
        </div>
        <div className={S.smallImages}>
            {images.map((image,ind) => (
                <div className={S.imageSmall} key={ind}>
                    <Image onClick={() => setSelectedImage(ind) } src={images[ind] } width={50} height={50} alt="resm"/>
                </div>
            ))}
        </div>
    </div>
  )
}
