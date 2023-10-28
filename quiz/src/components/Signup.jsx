import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {

    const navigate = useNavigate();
    function handleSubmit(){
        navigate('/quiz');    
    }

    return (
        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='border-4 shadow-md p-10 text-center space-y-14'>
                <p className='lg:text-3xl text-xl'>Write your name and  start the QUIZ!</p>
                <input onChange={function(e){props.setName(e.target.value)}} className='border-2 border-black lg:w-3/4 h-12 lg:text-2xl text-center' />
                <div><button onClick={handleSubmit} className='shadow-md lg:text-xl font-bold py-2 px-4 border-2 bg-orange-600 text-white rounded-lg'>Start</button></div>
            </div>
        </div>
    )
}
