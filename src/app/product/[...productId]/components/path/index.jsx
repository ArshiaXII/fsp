import Link from 'next/link';
import React from 'react';
import * as S from "./styled";

export default function Path() {
    return (
        <div className={S.mainDiv}>
            <div className={S.content}>
                <Link href="/">Ana Sayfa</Link>
                /
                <Link href="/">Group 1</Link>
                /
                <Link href="/">Group 2</Link>
                /
                <Link href="/">Group 3</Link>
                /
                <Link href="/">Product Name</Link>
            </div>
        </div>
    )
}
