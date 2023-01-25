"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import * as S from "./styled";

export default function ImageCarousel() {
    const images = [
        "https://pbs.twimg.com/media/DCLXUiUXoAAkSyk.jpg",
        "https://cdn.shopify.com/s/files/1/0028/7509/7153/files/11_c3e8d85f-022a-4635-88c6-ef178e72502c.jpg?v=1621523334",
        "https://filearchive.cnews.ru/mrtest/images/publication/461/63461_IMG_1200X500.jpg",
        "https://filearchive.cnews.ru/mrtest/images/publication/081/64081_IMG_1200X500.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    const handleCircleButtons = (ind) => {
        setCurrentImageIndex(ind);
    }

    const handlePrevious = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }

    }

    const handleNext = () => {
        if (currentImageIndex === (images.length - 1)) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }

    }

    return (
        <div className={S.mainDiv}>

            {/* //Images */}
            <div>
                <Link href="/">
                    <Image width="1400" height="400" src={images[currentImageIndex]} alt="resim" />
                </Link>
            </div>

            {/* //Circle buttons */}
            <div className={S.circleButtonDiv}>
                {images.reverse().map((item, index) => (
                    <span key={index} onClick={() => handleCircleButtons(index)} className={`${currentImageIndex === index ? 'text-customGray' : 'text-customRed'} cursor-pointer`}><BsCircleFill /> </span>
                ))}
            </div>

            <button onClick={handlePrevious} type="button" className={S.prevBtn} >
                <span className={S.prevNextSpan}>
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={handleNext} type="button" className={S.nextBtn} >
                <span className={S.prevNextSpan}>
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

        </div>
    );
}
