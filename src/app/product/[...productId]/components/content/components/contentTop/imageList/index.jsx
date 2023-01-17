"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import * as S from "./styled"

export default function ProductImages() {

    const images = ["https://st3.myideasoft.com/idea/hz/44/myassets/products/024/kitchenaid-5kfc0516eer-empire-red-1-19-litre-mutfak-robotu-4903.jpeg?revision=1673085675","https://st.myideasoft.com/idea/hz/44/myassets/products/024/kitchenaid-5kfc0516eer-empire-red-1-19-litre-mutfak-robotu-4906_min.jpeg?revision=1673085675","https://st3.myideasoft.com/idea/hz/44/myassets/products/024/kitchenaid-5kfc0516eer-empire-red-1-19-litre-mutfak-robotu-4905_min.jpeg?revision=1673085675","https://st1.myideasoft.com/idea/hz/44/myassets/products/024/kitchenaid-5kfc0516eer-empire-red-1-19-litre-mutfak-robotu-4904_min.jpeg?revision=1673085675"];

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
