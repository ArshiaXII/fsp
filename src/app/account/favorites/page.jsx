import Image from 'next/image';
import React from 'react';
import * as S from "./styled"

export default function FavoritesPage() {
    return (
        <div className={S.mainDiv}>
            <div className={S.pageTitle}>
                <h1>Favori Ürünlerim</h1>
            </div>
            <div className={S.content}>
                <table className={S.table}>
                    <thead>
                        <tr className={S.tableHead}>
                            <th className={S.tableCol}> </th>
                            <th className={S.tableCol}>Ürün Adı</th>
                            <th className={S.tableCol}>Kdv Hariç Fiyat</th>
                            <th className={S.tableCol}>Kdv Dahil Fiyat</th>
                            <th className={S.tableCol}> </th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr className={S.tableRow}>
                                <td className={S.tableCol}><Image width={50} height={50} src="https://st1.myideasoft.com/idea/hz/44/myassets/products/612/singer-model-150-profesyonel-dikis-prova-mankeni-1969_min.jpeg?revision=1673589074" alt="resm" /></td>
                                <td className={S.tableCol}>Singer Model 150 Profesyonel Dikiş Prova Mankeni</td>
                                <td className={S.tableCol}>1.863,56 TL</td>
                                <td className={S.tableCol}>2.199,00 TL</td>
                                <td className={S.tableCol}><button className={S.deleteBtn}>Sil</button></td>
                            </tr>
                            <tr className={S.tableRow}>
                                <td className={S.tableCol}><Image width={50} height={50} src="https://st2.myideasoft.com/idea/hz/44/myassets/products/299/joseph-joseph-60172-folio-standli-kesme-tahtasi-seti-rose-gold-10265_min.jpeg?revision=1673417868" alt="resm" /></td>
                                <td className={S.tableCol}>Joseph Joseph 60172 Folio Standlı Kesme Tahtası Seti - Rose Gold</td>
                                <td className={S.tableCol}>1.778,81 TL</td>
                                <td className={S.tableCol}>2.099,00 TL</td>
                                <td className={S.tableCol}><button className={S.deleteBtn}>Sil</button></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
