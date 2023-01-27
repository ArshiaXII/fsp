import React from 'react';
import * as S from "./styled"
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

export default function RatingSummary({ product, listingComments }) {
    let averageRating = 0;
    let totalPoint = 0;
    let ratingCount = listingComments.length;
    let rated5Count = 0;
    let rated4Count = 0;
    let rated3Count = 0;
    let rated2Count = 0;
    let rated1Count = 0;

    listingComments.forEach(item => {
        totalPoint += item.rating;
        if(item.rating === 5){
            rated5Count += 1
            return false;
        }
        if(item.rating === 4){
            rated4Count += 1
            return false;
        }
        if(item.rating === 3){
            rated3Count += 1
            return false;
        }
        if(item.rating === 2){
            rated2Count += 1
            return false;
        }
        if(item.rating === 1){
            rated1Count += 1
            return false;
        }
    });

    if(ratingCount > 0) {
        averageRating = totalPoint / ratingCount; 
    }
    
    const rate5Percent = rated5Count/ratingCount;
    const rate4Percent = rated4Count/ratingCount;
    const rate3Percent = rated3Count/ratingCount;
    const rate2Percent = rated2Count/ratingCount;
    const rate1Percent = rated1Count/ratingCount;

    



    return (
        <div className={S.ratingSummary}>
            <Image src={product.images[0]} width="200" height="200" alt="product" />
            <div className={S.summaryCenter}>
                <h4 className={S.rating}>{averageRating.toString().slice(0,3)}</h4>
                <div className={S.starDiv}>
                    <AiFillStar className={averageRating > 0 ? `${S.star} text-yellow-500` : `${S.star} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar className={averageRating > 1 ? `${S.star} text-yellow-500` : `${S.star} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar className={averageRating > 2 ? `${S.star} text-yellow-500` : `${S.star} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar className={averageRating > 3 ? `${S.star} text-yellow-500` : `${S.star} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar className={averageRating > 4 ? `${S.star} text-yellow-500` : `${S.star} text-gray-300  hover:text-yellow-500`} />
                </div>
            </div>
            <div className={S.summaryEnd}>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        5
                    </div>
                    <div className={S.starSummaryBar}>
                        <div className={
                            rate5Percent === 1 ? `${S.filledBar} w-full` : 
                            rate5Percent > 0.9 ? `${S.filledBar} w-10/12` :
                            rate5Percent > 0.8 ? `${S.filledBar} w-9/12` :
                            rate5Percent > 0.7 ? `${S.filledBar} w-8/12` :
                            rate5Percent > 0.6 ? `${S.filledBar} w-7/12` :
                            rate5Percent > 0.5 ? `${S.filledBar} w-6/12` :
                            rate5Percent > 0.4 ? `${S.filledBar} w-5/12` :
                            rate5Percent > 0.3 ? `${S.filledBar} w-4/12` :
                            rate5Percent > 0.2 ? `${S.filledBar} w-3/12` :
                            rate5Percent > 0.1 ? `${S.filledBar} w-2/12` :
                            `${S.filledBar}`
                        }>
                            .
                        </div>
                    </div>
                    <div>
                        {rated5Count}
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        4
                    </div>
                    <div className={S.starSummaryBar}>
                    <div className={
                            rate4Percent === 1 ? `${S.filledBar} w-full` : 
                            rate4Percent > 0.9 ? `${S.filledBar} w-10/12` :
                            rate4Percent > 0.8 ? `${S.filledBar} w-9/12` :
                            rate4Percent > 0.7 ? `${S.filledBar} w-8/12` :
                            rate4Percent > 0.6 ? `${S.filledBar} w-7/12` :
                            rate4Percent > 0.5 ? `${S.filledBar} w-6/12` :
                            rate4Percent > 0.4 ? `${S.filledBar} w-5/12` :
                            rate4Percent > 0.3 ? `${S.filledBar} w-4/12` :
                            rate4Percent > 0.2 ? `${S.filledBar} w-3/12` :
                            rate4Percent > 0.1 ? `${S.filledBar} w-2/12` :
                            `${S.filledBar}`
                        }>
                            .
                        </div>
                    </div>
                    <div>
                    {rated4Count}
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        3
                    </div>
                    <div className={S.starSummaryBar}>
                    <div className={
                            rate3Percent === 1 ? `${S.filledBar} w-full` : 
                            rate3Percent > 0.9 ? `${S.filledBar} w-10/12` :
                            rate3Percent > 0.8 ? `${S.filledBar} w-9/12` :
                            rate3Percent > 0.7 ? `${S.filledBar} w-8/12` :
                            rate3Percent > 0.6 ? `${S.filledBar} w-7/12` :
                            rate3Percent > 0.5 ? `${S.filledBar} w-6/12` :
                            rate3Percent > 0.4 ? `${S.filledBar} w-5/12` :
                            rate3Percent > 0.3 ? `${S.filledBar} w-4/12` :
                            rate3Percent > 0.2 ? `${S.filledBar} w-3/12` :
                            rate3Percent > 0.1 ? `${S.filledBar} w-2/12` :
                            `${S.filledBar}`
                        }>
                            .
                        </div>
                    </div>
                    <div>
                    {rated3Count}
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        2
                    </div>
                    <div className={S.starSummaryBar}>
                    <div className={
                            rate2Percent === 1 ? `${S.filledBar} w-full` : 
                            rate2Percent > 0.9 ? `${S.filledBar} w-10/12` :
                            rate2Percent > 0.8 ? `${S.filledBar} w-9/12` :
                            rate2Percent > 0.7 ? `${S.filledBar} w-8/12` :
                            rate2Percent > 0.6 ? `${S.filledBar} w-7/12` :
                            rate2Percent > 0.5 ? `${S.filledBar} w-6/12` :
                            rate2Percent > 0.4 ? `${S.filledBar} w-5/12` :
                            rate2Percent > 0.3 ? `${S.filledBar} w-4/12` :
                            rate2Percent > 0.2 ? `${S.filledBar} w-3/12` :
                            rate2Percent > 0.1 ? `${S.filledBar} w-2/12` :
                            `${S.filledBar}`
                        }>
                            .
                        </div>
                    </div>
                    <div>
                    {rated2Count}
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        1
                    </div>
                    <div className={S.starSummaryBar}>
                    <div className={
                            rate1Percent === 1 ? `${S.filledBar} w-full` : 
                            rate1Percent > 0.9 ? `${S.filledBar} w-10/12` :
                            rate1Percent > 0.8 ? `${S.filledBar} w-9/12` :
                            rate1Percent > 0.7 ? `${S.filledBar} w-8/12` :
                            rate1Percent > 0.6 ? `${S.filledBar} w-7/12` :
                            rate1Percent > 0.5 ? `${S.filledBar} w-6/12` :
                            rate1Percent > 0.4 ? `${S.filledBar} w-5/12` :
                            rate1Percent > 0.3 ? `${S.filledBar} w-4/12` :
                            rate1Percent > 0.2 ? `${S.filledBar} w-3/12` :
                            rate1Percent > 0.1 ? `${S.filledBar} w-2/12` :
                            `${S.filledBar}`
                        }>
                            .
                        </div>
                    </div>
                    <div>
                    {rated1Count}
                    </div>
                </div>
            </div>
        </div>
    )
}
