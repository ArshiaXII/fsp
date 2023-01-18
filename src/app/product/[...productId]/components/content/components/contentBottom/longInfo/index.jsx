import Image from 'next/image';
import React from 'react';
import * as S from "./styled";

export default function ContentBottom() {

  const features = [
    { key: "PCI Express 5.0", value: "1 x PCI Express 5.0 x16, 1 x PCI Express 5.0 x8" },
    { key: "İşlemci Soket Tipi", value: "1700" },
    { key: "Intel Chipset", value: "Intel Z790" },
    { key: "Ram Slot Sayısı", value: "4" },
    { key: "Max Ram Desteği", value: "128GB" },
    { key: "PCI Express 5.0", value: "1 x PCI Express 5.0 x16, 1 x PCI Express 5.0 x8" },
    { key: "İşlemci Soket Tipi", value: "1700" },
    { key: "Intel Chipset", value: "Intel Z790" },
    { key: "Ram Slot Sayısı", value: "4" },
    { key: "Max Ram Desteği", value: "128GB" },
    { key: "PCI Express 5.0", value: "1 x PCI Express 5.0 x16, 1 x PCI Express 5.0 x8" },
    { key: "İşlemci Soket Tipi", value: "1700" },
    { key: "Intel Chipset", value: "Intel Z790" },
    { key: "Ram Slot Sayısı", value: "4" },
    { key: "Max Ram Desteği", value: "128GB" },
    { key: "PCI Express 5.0", value: "1 x PCI Express 5.0 x16, 1 x PCI Express 5.0 x8" },
    { key: "İşlemci Soket Tipi", value: "1700" },
    { key: "Intel Chipset", value: "Intel Z790" },
    { key: "Ram Slot Sayısı", value: "4" },
    { key: "Max Ram Desteği", value: "128GB" }
  ]



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
          {features.map((feature, ind) => (
            <tr className='flex gap-x-8 border border-solid border-black'>
              <td className='flex-1 bg-gray-300'>{feature.key}</td>
              <td className='flex-1'>{feature.value}</td>
            </tr>
          ))}

        </table>
        
        <div className='w-2/3 flex flex-col items-center'> 
        <Image src={"https://img-itopya.mncdn.com/cdn/350/yeni-proje-2023-01-17t124102326-8b4db3.jpg"} width={400} height={400} />
          <p className='text-start'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, fugit nostrum dicta blanditiis odio veritatis amet sit tempora minima, iusto laboriosam commodi, laudantium doloremque voluptatum quisquam necessitatibus. Ipsam beatae eveniet sequi. Laudantium molestiae alias quasi fugiat!
          </p>
        </div>
      </div>
    </div>
  )
}
