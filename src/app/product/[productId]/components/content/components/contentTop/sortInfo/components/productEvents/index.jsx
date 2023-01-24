"use client"
import React, { useContext } from 'react';
import * as S from "./styled";
import { AiFillSound, AiFillHeart, AiFillMessage, AiFillBell } from "react-icons/ai";
import { UsersContext } from '@/context/User';
import { RiDislikeFill } from 'react-icons/ri';

export default function ProductEvents({product}) {

    const { fetchLoginnedUserData, loginnedUser, isLoginned } = useContext(UsersContext);

    const handleAddFav = async () => {

        const userFavorites = loginnedUser.favorites.slice();

        userFavorites.push(product.id.toString());

        await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({favorites: userFavorites})
        })

        const userId = JSON.parse(localStorage.getItem("loginnedUser"));
        fetchLoginnedUserData(userId)
    }

    const handleDelFav = async (id) => {
        let favList = loginnedUser.favorites.slice();
        favList = favList.filter((fav) => fav != id);
        await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ favorites: favList })
        })
        const userId = JSON.parse(localStorage.getItem("loginnedUser"));
        await fetchLoginnedUserData(userId);
    }

    return (
        <div className={S.productEvents}>
            {isLoginned === true && !loginnedUser.favorites?.includes(`${product.id}`) ? 
            <button onClick={handleAddFav} className={S.productEvent}>
                <span><AiFillHeart /></span> Favorilerime Ekle
            </button>
            : 
            <button onClick={() => handleDelFav(product.id)} className={S.productEvent}>
                <span><RiDislikeFill /></span> Favorilerimden Kaldır
            </button>
            }
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
