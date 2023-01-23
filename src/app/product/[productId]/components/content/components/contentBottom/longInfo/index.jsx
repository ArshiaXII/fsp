import Image from 'next/image';
import React from 'react';
import * as S from "./styled";

export default function ContentBottom({ product }) {

  const features = product.table;



  return (
    <div className={S.mainDiv}>
      <div className={S.linkGroup}>
        <div className={S.link}>Ürün Bilgisi</div>
        <div className={S.link}>Yorumlar</div>
        <div className={S.link}>Taksit Seçenekleri</div>
        <div className={S.link}>Önerileriniz</div>
      </div>
      <div className={S.content}>
        <table className='w-1/3'>
          <tbody>
            {features?.map((feature, ind) => (
              <tr key={ind} className='flex gap-x-8 border border-solid border-black'>
                <td className='flex-1 px-2 py-1 bg-gray-300'>{feature.key}</td>
                <td className='flex-1 px-2 py-1'>{feature.value}</td>
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
    </div>
  )
}
