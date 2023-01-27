"use client"
import { ProductsContext } from '@/context/Products';
import React, { useContext, useEffect, useState } from 'react';
import { FaCommentSlash } from 'react-icons/fa';
import CommentItem from '../commentItem';
import RatingButtons from '../ratingButtons';
import RatingEditor from '../ratingEditor';
import RatingSummary from '../ratingSummary';
import * as S from "./styled"

export default function CommentList({ product }) {
    const [editorView, setEditorView] = useState(false);
    const [listingComments,setListingComments] = useState([]);
    const [sendState, setSendState] = useState(false);

    useEffect(() => {
        setListingComments(product.comments.reverse())
    },[product])



    return (
        <div className={S.mainDiv}>
            <div className={S.commContent}>
                <h3 className={S.summaryTitle}>
                    {product.title}
                </h3>
                <RatingSummary listingComments={listingComments} product={product} />
                <RatingButtons sendState={sendState} setEditorView={setEditorView} product={product} />
                {editorView === true ?
                    <RatingEditor sendState={sendState} setSendState={setSendState} setListingComments={setListingComments} product={product} />
                    : null}

                {listingComments.length > 0 ?
                    <div className='flex flex-col gap-y-5 justify-center items-start p-3 w-full'>
                        {listingComments.map((item) => (
                            <CommentItem key={item.id} item={item} />
                        ))}
                    </div> :
                    <div className='flex flex-col gap-y-4 justify-center items-center w-full p-3'>
                        <FaCommentSlash className='text-6xl text-gray-400'/>
                        <h4 className='text-2xl text-gray-400'>Ürün için henüz hiç bir değerlendirme yapılmadı!</h4>
                    </div>}
            </div>
        </div>
    )
}
