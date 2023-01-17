"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import * as S from "./styled";

export default function ImageCarousel() {
    const images = [
        "https://st.myideasoft.com/idea/hz/44/myassets/slider_pictures/pictures_1_2.jpg?revision=1637917139",
        "https://st.myideasoft.com/idea/hz/44/myassets/slider_pictures/pictures_1_4.jpg?revision=1637917139",
        "https://st.myideasoft.com/idea/hz/44/myassets/slider_pictures/pictures_1_1.jpg?revision=1637917139"
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
                <img src={images[currentImageIndex]} alt="resim" />
                </Link>
            </div>

            {/* //Circle buttons */}
            <div className={S.circleButtonDiv}>
                {images.reverse().map((item, index) => (
                    <span onClick={() => handleCircleButtons(index)} className={`${currentImageIndex === index ? 'text-customGray' : 'text-customRed'} cursor-pointer`}><BsCircleFill /> </span>
                ))}
            </div>

            <button onClick={handlePrevious} type="button" className={S.prevBtn} >
                <span className={S.prevNextSpan}>
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={handleNext} type="button" className={S.nextBtn} >
                <span className={S.prevNextSpan}>
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>

        </div>
    );
}
