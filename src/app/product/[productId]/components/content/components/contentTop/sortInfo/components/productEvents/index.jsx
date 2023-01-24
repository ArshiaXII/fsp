"use client"
import React, { useContext } from 'react';
import * as S from "./styled";
import { AiFillSound, AiFillHeart, AiFillMessage, AiFillBell } from "react-icons/ai";
import { UsersContext } from '@/context/User';

export default function ProductEvents({product}) {

    const { fetchLoginnedUserData, loginnedUser } = useContext(UsersContext);

    const handleAddFav = async () => {

        const userFavorites = loginnedUser.favorites.slice();

        userFavorites.push(product.id.toString());

        await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({favorites: userFavorites})
        }).then(() => {
            fetchLoginnedUserData();
        })
    }

    return (
        <div className={S.productEvents}>
            <button onClick={handleAddFav} className={S.productEvent}>
                <span><AiFillHeart /></span> Favorilerime Ekle
            </button>
            <button className={S.productEvent}>
                <span><AiFillSound /></span> Tavsiye Et
            </button>
            <button className={S.productEvent}>
                <span><AiFillMessage /></span> Yorum Yaz
            </button>
            <button className={S.productEvent}>
                <span><AiFillBell /></span> Fiyat Alarmı
            </button>
        </div>
    )
}
