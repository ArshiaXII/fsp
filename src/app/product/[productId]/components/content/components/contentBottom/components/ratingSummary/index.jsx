import React from 'react';
import * as S from "./styled"
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

export default function RatingSummary({product}) {
    return (
        <div className={S.ratingSummary}>
            <Image src={product.images[0]} width="200" height="200" alt="product" />
            <div className={S.summaryCenter}>
                <h4 className={S.rating}>{product.rating}</h4>
                <div className={S.starDiv}>
                    <AiFillStar className={S.star} />
                    <AiFillStar className={S.star} />
                    <AiFillStar className={S.star} />
                    <AiFillStar className={S.star} />
                    <AiFillStar className={S.star} />
                </div>
            </div>
            <div className={S.summaryEnd}>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        5
                    </div>
                    <div className={S.starSummaryBar}>
                        <div className={S.filledBar}>
                            .
                        </div>
                    </div>
                    <div>
                        50
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        4
                    </div>
                    <div className={S.starSummaryBar}>
                        <div className={S.filledBar}>
                            .
                        </div>
                    </div>
                    <div>
                        30
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        3
                    </div>
                    <div className={S.starSummaryBar}>
                        <div className={S.filledBar}>
                            .
                        </div>
                    </div>
                    <div>
                        10
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        2
                    </div>
                    <div className={S.starSummaryBar}>
                        <div className={S.filledBar}>
                            .
                        </div>
                    </div>
                    <div>
                        20
                    </div>
                </div>
                <div className={S.starSummary}>
                    <AiFillStar className={S.smallStar} />
                    <div>
                        1
                    </div>
                    <div className={S.starSummaryBar}>
                        <div className={S.filledBar}>
                            .
                        </div>
                    </div>
                    <div>
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}
