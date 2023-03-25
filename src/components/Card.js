import React from 'react';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    const review = props.review;
  return (
    <div className='flex flex-col md:relative '>
    <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img className='aspect-square rounded-full w-[140px] z-[25] h-[140px]' src={review.image} alt="" />
    
    <div className='w-[140px] z-[-20] h-[140px] rounded-full bg-violet-500 top-[-6px] absolute left-[10px] '> </div>
    </div>
    <div className='text-center mt-7'>
        <p className=' tracking-wider font-bold text-2xl capitalize'>{review.name} </p>
        <p className='text-violet-300 uppercase text-sm'>
        {review.job}
        </p>
    </div>
    
    <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft />
    </div>
    <div className='text-slate-500 text-center mt-4'>
        {review.text}
    </div>
    <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight />
    </div>
  
      
    </div>
  )
}

export default Card
