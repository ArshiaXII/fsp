"use client"
import React from 'react';
import * as S from "./styled";
import { AiOutlineMenu } from 'react-icons/ai';

export default function CollapseMenuButton() {

    const handleMobileMenu = () => {
        const collapsemenu = document.getElementById("collapsemenu");
        collapsemenu.classList.toggle("hidden")
    }

    return (
        <div className={S.btnMenu} onClick={handleMobileMenu} >
            <AiOutlineMenu />

        </div>
    )
}
