"use client"
import React, { useState } from 'react';
import RatingButtons from '../ratingButtons';
import RatingEditor from '../ratingEditor';
import RatingSummary from '../ratingSummary';
import * as S from "./styled"

export default function CommentList({ product }) {
    const [editorView, setEditorView] = useState(false);

    return (
        <div className={S.mainDiv}>
            <div className={S.commContent}>
                <h3 className={S.summaryTitle}>
                    {product.title}
                </h3>
                <RatingSummary product={product} />
                <RatingButtons setEditorView={setEditorView} product={product} />
                {editorView === true ?
                    <RatingEditor product={product} />
                    : null}
            </div>
        </div>
    )
}
