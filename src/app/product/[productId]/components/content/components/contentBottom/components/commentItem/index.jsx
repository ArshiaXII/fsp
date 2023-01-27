import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import * as S from "./styled";

export default function CommentItem({ item }) {

    let codeName = item.author.split(" ");
    codeName = codeName.map((name) => name.slice(0, 1));


    return (
        <div className={S.mainDiv}>
            <div className='logo'>
                <div className='bg-gray-200 rounded-full text-2xl font-medium p-5'>
                    {codeName.join("")}
                </div>
            </div>
            <div className='flex flex-col items-start justify-start w-full gap-y-4'>
                <div className='flex items-center justify-start gap-x-3 text-sm text-gray-400'>
                    <div className='flex items-center justify-center'>
                        <AiFillStar className={item.rating > 0 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300 `} />
                        <AiFillStar className={item.rating > 1 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300 `} />
                        <AiFillStar className={item.rating > 2 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300 `} />
                        <AiFillStar className={item.rating > 3 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300 `} />
                        <AiFillStar className={item.rating > 4 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300 `} />
                    </div>
                    <div>
                        {item.commentDate}
                    </div>
                    |
                    <div>
                        {item.author}
                    </div>

                </div>
                <div className="bg-gray-200 p-6 w-full rounded-2xl">
                    <p>{item.comment}</p>
                </div>
                {/* <div className="commentRating">
                Bu değerlendirme faydalı mı ? 
                <div>
                    <BsHandThumbsUpFill/>
                    <span>{item.positive}</span>
                </div>
                <div>
                    <BsFillHandThumbsDownFill />
                    <span>{item.negative}</span>
                </div>
            </div> */}
            </div>
        </div>
    )
}
