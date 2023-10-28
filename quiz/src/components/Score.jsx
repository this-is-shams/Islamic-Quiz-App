import React from 'react'

export default function Score(props) {
  return (
    <div className='flex justify-center items-center mt-20'>
    <div className='border-4 shadow-md p-10 text-center space-y-14'>
        <p className='lg:text-3xl'>Congratulations {props.name}!</p>
        <p className='font-bold text-red-400 lg:text-3xl'>Your Score is {props.point} out of 5</p>
    </div>
</div>
  )
}
