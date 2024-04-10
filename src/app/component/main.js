"use client"
import React from 'react';
import Image from 'next/image';
import { BsArrowRightCircleFill } from "react-icons/bs";

const Main = () => {
    
  return (
    <>
      <div className='flex  justify-center content-center pt-6'>
            <h2 className="sm:text-4xl text-3xl   font-extrabold   mb-4">The Calendly Blog</h2>
        </div>
       

       <div >
        <ul className='flex flex-wrap gap-y-5 gap-x-1 sm:gap-x-10 justify-center content-center mt-4'>
            <li className="font-questrial text-white py-1 cursor-pointer bg-blue-500 rounded-2xl  px-5">ALL</li>
            <li className="font-questrial rounded-2xl border-white border-2 py-1 hover:border-blue-700 px-5 cursor-pointer">WHAT'S NEW</li>
            <li className="rounded-2xl  font-questrial border-white border-2 py-1 hover:border-blue-700 px-5 cursor-pointer">SALES</li>
            <li className="rounded-2xl font-questrial border-white border-2 py-1 hover:border-blue-700 px-5 cursor-pointer">RECRUTING</li>
            <li className=" rounded-2xl font-questrial border-white border-2 py-1 hover:border-blue-700 px-5 cursor-pointer">PRODUCTIVITY</li>
            <li className="rounded-2xl font-questrial border-white border-2 py-1 hover:border-blue-700 px-5 cursor-pointer">CREATING CALENDLY</li>    
        </ul>
       </div>

       <div className=' flex-col justify-between mx-5 my-5 gap-10 sm:mx-20 sm:flex-row flex' >
       <div className='sm:w-1/2'>
       <img
            className=" h-full  w-full"
            src="/time.png"
            alt="tag"
            
            />
            </div>
          
          <div className='font-questrial my-auto sm:w-1/2 py-10 '>
            <h2 className='text-xl text-gray-600'>WHAT'S NEW</h2>
            <h1 className='font-extrabold text-4xl py-5 '>Welcome to the Time Economy</h1>
            <p className='text-2xl'>Our most Precious is time-and the next decade will be defined by how we manage it.</p>
            <div className='flex pt-5 items-center gap-1'>
            <p className=' font-semibold'>Read the article </p>
            <BsArrowRightCircleFill />
            </div>
          </div>
          
       </div>
     
      
    </>
        
  );
}

export default Main;
