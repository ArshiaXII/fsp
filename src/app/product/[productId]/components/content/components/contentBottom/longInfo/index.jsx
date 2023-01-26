"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import CommentList from '../components/commentList';
import * as S from "./styled";

export default function ContentBottom({ product }) {

    const [viewedContent,setViewedContent] = useState("desc");





  return (
    <div className={S.mainDiv}>
      <div className={S.linkGroup}>
        <div onClick={() => setViewedContent("desc")} className={viewedContent === "desc" ? `${S.link} bg-gray-100` : `${S.link}`}>Ürün Bilgisi</div>
        <div onClick={() => setViewedContent("comm")} className={viewedContent === "comm" ? `${S.link} bg-gray-100` : `${S.link}`}>Yorumlar</div>
        <div onClick={() => setViewedContent("innt")} className={viewedContent === "innt" ? `${S.link} bg-gray-100` : `${S.link}`}>Taksit Bilgisi</div>
      </div>
      {viewedContent === "desc" ? 
      <div className={S.desContent}>
        <table className='w-11/12 md:w-1/3'>
          <tbody>
            {product.table?.map((feature, ind) => (
              <tr key={ind} className='flex gap-x-8 border border-solid border-black'>
                <td className='text-xs md:text-base align-middle flex-1 px-1 md:px-2 py-1 bg-gray-300'>{feature.key}</td>
                <td className='text-xs md:text-base align-middle flex-1 px-1 md:px-2 py-1'>{feature.value}</td>
              </tr>
            ))}
          </tbody>

        </table>

        <div className='w-2/3 flex flex-col items-center gap-y-2'>
          <Image alt='resm' src={product.images[0]} width={400} height={400} />
          <h5>{product.title}</h5>
          {product.productDescriptions.length > 0 ?
            <p className='text-start'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, fugit nostrum dicta blanditiis odio veritatis amet sit tempora minima, iusto laboriosam commodi, laudantium doloremque voluptatum quisquam necessitatibus. Ipsam beatae eveniet sequi. Laudantium molestiae alias quasi fugiat!
            </p>
            : null}
        </div>
      </div>
      : viewedContent === "comm" ?
       <CommentList product={product} />
       : null}
    </div>
  )
}
