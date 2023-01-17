import Image from 'next/image';
import React from 'react'
import * as S from "./styled";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import Link from 'next/link';

export default function TypeList() {

    const images = [
        [image1, image2, image3],
        [image4, image5, image6]
    ]



    return (
        <div className={S.mainDiv}>

            {images.map((row, index) => (
                <div key={index} className={S.row}>
                    {images[index].map((image, ind) => (
                        <Link href="/product-type" className={S.imageCol}>
                            <Image key={ind} src={images[index][ind]} className alt="product" />
                        </Link>
                    ))}
                </div>
            ))}


        </div>
    )
}
