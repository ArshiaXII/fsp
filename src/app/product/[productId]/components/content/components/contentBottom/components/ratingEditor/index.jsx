"use client"
import { UsersContext } from '@/context/User';
import { customAlphabet } from 'nanoid';
import React, { useContext, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import * as S from "./styled";


export default function RatingEditor({ product }) {

    const nanoid = customAlphabet("1234567890",5);

    const { loginnedUser, fetchLoginnedUserData } = useContext(UsersContext);
    const [firstName, setFirstName] = useState(loginnedUser.firstname);
    const [lastName, setLastName] = useState(loginnedUser.lastname);
    const [ratingStar, setRatingStar] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [comment, setComment] = useState("");

    const handleHide = () => {
        if (hidden === false) {
            setFirstName(`${firstName.slice(0, 1)}...`);
            setLastName(`${lastName.slice(0, 1)}...`);
        }
        else {
            setFirstName(loginnedUser.firstname);
            setLastName(loginnedUser.lastname);
        }

        setHidden(!hidden)

    }

    const handleSendRating = async () => {

        if (comment === "") {
            let error = document.getElementById("textError");
            error.classList.remove("hidden");
            error.innerText="Yorum kısmı boş olamaz!"
            setTimeout(() => {
                error.classList.add("hidden");
                error.innerText=""
            }, 3000)
            return false;
        }
        if (comment.length < 10) {
            let error = document.getElementById("textError");
            error.classList.remove("hidden");
            error.innerText="Yorumunuz çok kısa!"
            setTimeout(() => {
                error.classList.add("hidden");
                error.innerText=""
            }, 3000)
            return false;
        }
        if (ratingStar === 0) {
            let error = document.getElementById("starError");
            error.classList.add("text-customRed");
            setTimeout(() => {
                error.classList.remove("text-customRed");
            }, 3000)
            return false;
        }
        
        let newRating = {id: nanoid(), rating: ratingStar, comment: comment, author: `${firstName} ${lastName}`};
        let productRatings = product.comments;
        productRatings = [...productRatings,newRating];
        await fetch(`https://amber-goat-garb.cyclic.app/products/${product.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comments: productRatings })
        })
        await fetchLoginnedUserData(loginnedUser.id);
    }


    return (
        <div className='flex flex-col items-start jutify-center w-full gap-y-3'>
            <div className='flex items-center w-full justify-between p-2'>
                <div className={S.starDiv}>
                    <AiFillStar onMouseEnter={() => setRatingStar(1)} className={ratingStar > 0 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar onMouseEnter={() => setRatingStar(2)} className={ratingStar > 1 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar onMouseEnter={() => setRatingStar(3)} className={ratingStar > 2 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar onMouseEnter={() => setRatingStar(4)} className={ratingStar > 3 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300  hover:text-yellow-500`} />
                    <AiFillStar onMouseEnter={() => setRatingStar(5)} className={ratingStar > 4 ? `${S.ratingStar} text-yellow-500` : `${S.ratingStar} text-gray-300  hover:text-yellow-500`} />
                    {ratingStar === 1 ? <small className={S.starText}>Çok Kötü</small>
                        : ratingStar === 2 ? <small className={S.starText}>Kötü</small>
                            : ratingStar === 3 ? <small className={S.starText}>Orta</small>
                                : ratingStar === 4 ? <small className={S.starText}>İyi</small>
                                    : ratingStar === 5 ? <small className={S.starText}>Çok İyi</small> :
                                        <small id='starError' className={S.starText}>Lütfen değerlendirmenizi yapın!</small>}
                </div>
                <div className='flex items-center justify-center gap-x-2 text-sm '>
                    Yorumunuzda Gözükecek İsim: <span className='font-medium'>{firstName} {lastName} </span>
                    {hidden === false ?
                        <HiEyeOff onClick={handleHide} className='text-customRed cursor-pointer' />
                        : <HiEye onClick={handleHide} className='text-customRed cursor-pointer' />}
                </div>
            </div>
            <div className={S.textDiv}>
                <textarea onChange={(e) => setComment(e.target.value)} className={S.textarea} />
                <div className={S.buttonDiv}>
                    <button onClick={handleSendRating} className='flex items-center justify-center gap-x-2 rounded-xl bg-yellow-500 text-customWhite p-3'><BiSend /> Gönder</button>
                </div>
            </div>
            <small id='textError' className={S.errorMessage}></small>
        </div>
    )
}
