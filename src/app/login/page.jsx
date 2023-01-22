import React from 'react';
import LoginForm from './components/loginForm';
import * as S from "./styled";

export default function LoginPage() {

 
    return (
        <div className={S.mainDiv}>

            <div className={S.container}>
                <div className={S.loginDiv}>
                    <LoginForm />
                </div>
            </div>

        </div>
    )
}
