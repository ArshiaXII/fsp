"use client"
import React, { useContext } from 'react';
import * as S from "./styled";
import { BsFillBasket3Fill } from 'react-icons/bs';
import { UsersContext } from '@/context/User';

export default function AddBasketBtn({ product }) {

    const { handleAddBasket } = useContext(UsersContext);

    return (

        <button onClick={() => handleAddBasket(product)} className={S.addBasket}>
            <BsFillBasket3Fill />
        </button>

    )
}
