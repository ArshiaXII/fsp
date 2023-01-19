import Link from 'next/link';
import React from 'react'
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdAlternateEmail, MdPermIdentity } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as S from "./styled";



export default function RegisterPage() {
    return (
        <div className={S.mainDiv}>

            <div className={S.container}>
                <div className={S.registerBody}>
                    <div className={S.registerMain}>
                        <FaUserCircle className='text-8xl text-customLightGray' />
                        <h1 className={S.registerTitle}>Kayıt Ol</h1>

                        <form className={S.registerForm}>
                            <div className={S.registerInputDiv}>
                                <span className={S.registerInputSpan}>
                                    <MdPermIdentity />
                                </span>
                                <input placeholder='Ad' type="text" className={S.registerTextInput} />
                                <input placeholder='Soyad' type="text" className={S.registerTextInput2} />
                            </div>
                            {/* E-Mail */}
                            <div className={S.registerInputDiv}>
                                <span className={S.registerInputSpan}>
                                    <MdAlternateEmail />
                                </span>
                                <input placeholder='Email' type="email" className={S.registerTextInput} />
                                <input placeholder='Email Tekrar' type="email" className={S.registerTextInput2} />
                            </div>
                            {/* Password */}
                            <div className={S.registerInputDiv}>
                                <span className={S.registerInputSpan}>
                                    <RiLockPasswordLine />
                                </span>
                                <input placeholder='Parola' type="password" className={S.registerTextInput} />
                                <input placeholder='Parola Tekrar' type="password" className={S.registerTextInput2} />
                            </div>
                            {/* Gender Select */}
                            <div className={S.registerRadioInputMainDiv}>
                                <span className={S.registerInputSpan}>
                                    <BsGenderAmbiguous />
                                </span>
                                <div className={S.registerRadioInputDiv}>
                                    <div><input type="radio" name="gender" value="female" /> <label>Kadın</label></div>
                                    <div><input type="radio" name="gender" value="male" /> <label>Erkek</label></div>
                                    <div><input type="radio" name="gender" value="unknown" /> <label>*</label></div>
                                </div>
                            </div>
                            {/* Register Button */}
                            <div className='w-full'>
                                <button className={S.registerBtn}>Kayıt Ol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
