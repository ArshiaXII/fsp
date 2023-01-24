"use client"
import { UsersContext } from '@/context/User';
import React, { useContext } from 'react';
import * as S from "./styled";

export default function AdressButtons({ adress, setEditMode, setModalVisibility, setFormValues}) {

    const { loginnedUser,fetchLoginnedUserData} = useContext(UsersContext);

    const handleDelete = async () => {
        let adressList = loginnedUser.adresses.slice();
        adressList = adressList.filter((add) => add.title !== adress.title);
        await fetch(`https://amber-goat-garb.cyclic.app/users/${loginnedUser.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ adresses: adressList })
        })
        await fetchLoginnedUserData(loginnedUser.id);
    }

    const handleEdit = () => {
        setFormValues(adress);
        setEditMode(true);
        setModalVisibility(true);
    }


    return (
        <div className={S.adressButtonDiv}>
            <button onClick={handleEdit}  className={S.btnEdit}>Düzenle</button>
            <button onClick={handleDelete} className={S.btnDelete}>Sil</button>
        </div>
    )
}
