"use client"
import { UsersContext } from '@/context/User';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import * as S from "./styled"



export default function FavoritesPage() {

    const {fetchUserFavorites, userFavorites} = useContext(UsersContext);
   
    useEffect(() => {
        fetchUserFavorites();
    },[])


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
                        {userFavorites.map((fav,ind) => (
                            <tr key={ind} className={S.tableRow}>
                                <td className={S.tableCol}><Image width={50} height={50} src={fav.images[0]} alt="resm" /></td>
                                <td className={S.tableCol}>{fav.title}</td>
                                <td className={S.tableCol}>{fav.reducedprice},00 TL</td>
                                <td className={S.tableCol}>{fav.totalprice},00 TL</td>
                                <td className={S.tableCol}><button className={S.deleteBtn}>Sil</button></td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
