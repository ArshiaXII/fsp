import React from 'react'
import RegisterForm from './components/registerForm';
import * as S from "./styled";




export default function RegisterPage() {




    return (
        <div className={S.mainDiv}>

            <div className={S.container}>
                <div className={S.registerBody}>
                <div className={S.registerMain}>
                    <RegisterForm />
                    </div>
                </div>
            </div>

        </div>
    )
}
