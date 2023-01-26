"use client"
import { UsersContext } from '@/context/User';
import Image from 'next/image';
import React, { useContext } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { BsBagCheckFill, BsBagPlusFill, BsFillBagXFill } from 'react-icons/bs';
import * as S from "./styled"

export default function OrdersPage() {

    const { loginnedUser, fetchLoginnedUserData} = useContext(UsersContext);

    const handleDelete = async (orderId) => {
        let newOrders = loginnedUser.orders.filter((e) => e.id !== orderId);
        console.log(newOrders);
        await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orders: newOrders })
        })
        fetchLoginnedUserData(loginnedUser.id);
    }

    return (
        <div className={S.mainDiv}>
            <div className={S.pageTitle}>
                <h1>Siparişlerim</h1>
            </div>
            <div className={S.content}>
                {loginnedUser.orders?.length > 0 ? 
                <table className={S.table}>
                    <thead>
                        <tr className={S.tableHead}>
                            <th className={S.tableCol}> </th>
                            <th className={S.tableCol}>Sipariş No</th>
                            <th className={S.tableCol}>Ürün Adı</th>
                            <th className={S.tableCol}>Fiyatı</th>
                            <th className={S.tableCol}>Durumu</th>
                            <th className={S.tableCol}> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loginnedUser.orders?.map((order) => (
                            <tr key={order.id} className={S.tableRow}>
                                <td className={S.tableCol}><Image width={50} height={50} src={order.productImage} alt="resm" /></td>
                                <td className={S.tableCol}>{order.id}</td>
                                <td className={S.tableCol}><span className={S.productCount}>{order.productCount}x</span>{order.productTitle}</td>
                                <td className={S.tableCol}>{order.orderPrice},00 TL</td>
                                <td className={S.tableCol}>
                                    <div className={S.orderStateDiv}>
                                        <span className={S.orderIconPreparing}><BsBagPlusFill /></span>
                                        {order.status}
                                    </div>
                                </td>
                                <td className={S.tableCol}>
                                    {order.status === "Hazırlanıyor" ?
                                        <button onClick={() => handleDelete(order.id)} className={S.deleteBtn}>İptal</button>
                                        : null}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : 
                <div className={S.emptyOrderContainer}>
                    <AiFillExclamationCircle className={S.emptyIcon} />
                    <h2 className={S.emptyMessage}>Henüz hiçbir siparişiniz bulunmamaktadır!</h2>
                </div>
                }
            </div>
        </div>
    )
}
