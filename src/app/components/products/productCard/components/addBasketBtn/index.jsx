"use client"
import React, { useContext } from 'react';
import * as S from "./styled";
import { BsFillBasket3Fill } from 'react-icons/bs';
import { UsersContext } from '@/context/User';

export default function AddBasketBtn({ product }) {

    const { userBasket, setUserBasket } = useContext(UsersContext);

    const handleAddBasket = () => {
        const control = userBasket.filter((e) => e.product.title === product.title);
        if (control.length === 0) {
            const basketItem = { ...{ count: 1}, product }
            setUserBasket([...userBasket, basketItem])
        }
        else{
            control[0].count = control[0].count + 1;
            let newList = userBasket.filter((e) => e.product.title !== product.title);
            console.log(control);
            setUserBasket([...newList, control[0]])
        }

        console.log(userBasket);
    }

    return (

        <button onClick={handleAddBasket} className={S.addBasket}>
            <BsFillBasket3Fill />
        </button>

    )
}
