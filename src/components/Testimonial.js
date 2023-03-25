import React, { useState } from 'react';
import Card from './Card';
import {IoMdArrowDropleft,IoMdArrowDropright} from 'react-icons/io'

const Testimonial = (props) => {
    const reviews = props.reviews;
    const [index,setIndex] = useState(0)
    const leftShiftHandler =()=>{
        if(index - 1 < 0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1)
        }

    }
    const rightShiftHandler =()=>{
        if(index + 1 >= reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
        
    }
    const supriseHandler =()=>{
       let randomIndex = Math.floor(Math.random() * reviews.length);
       setIndex(randomIndex)

        
    }
  return (
    <div className='w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center 
    items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
      <Card review ={reviews[index]}/>
      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center mx-auto'>
        <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'> <IoMdArrowDropleft /> </button>
        <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'> <IoMdArrowDropright /> </button>
    </div>
    <div className='mt-6' >
    <button onClick={supriseHandler} className='text-center mx-auto bg-violet-400 cursor-pointer w-[140px] h-[40px] hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md text-white font-bold text-lg'>
        Suprise Me
        </button>
    </div>
    </div>
  )
}

export default Testimonial
