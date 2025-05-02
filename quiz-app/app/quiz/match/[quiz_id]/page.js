"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import quizMap from "@/database/quizQuestion";
import Image from 'next/image';

function Page() {
  const params = useParams();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  console.log(quizData);

  return (
    <div className='p-3 space-y-10'>
      <div>
        <div className='text-2xl text-[#39FF14] font-bold'>{quizData.name}</div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='w-[70%] m-auto p-5 bg-[#9D00FF]/20 flex flex-col items-center justify-center space-y-5 rounded-md'>
          <div className='w-full'>
            <div>Question 1 of 10</div>
          </div>
          <div className='relative w-[250px] h-[200px] rounded-md overflow-hidden'>
            <Image src={quizData.questions[0].image} alt="img" layout="fill" objectFit="contain" />
          </div>
          <div className='w-full'>Q. {quizData.questions[0].question}</div>
          <div className='w-full space-y-5'>
            <div className='bg-white text-black p-2 rounded-md space-x-2 cursor-pointer hover:bg-gray-400 duration-300'><span className='py-1 px-2 rounded-full bg-[#1A1A1A] text-white text-xs'>1</span><span>{quizData.questions[0].options[0].option}</span></div>
            <div className='bg-white text-black p-2 rounded-md space-x-2 cursor-pointer hover:bg-gray-400 duration-300'><span className='py-1 px-2 rounded-full bg-[#1A1A1A] text-white text-xs'>2</span><span>{quizData.questions[0].options[1].option}</span></div>
            <div className='bg-white text-black p-2 rounded-md space-x-2 cursor-pointer hover:bg-gray-400 duration-300'><span className='py-1 px-2 rounded-full bg-[#1A1A1A] text-white text-xs'>3</span><span>{quizData.questions[0].options[2].option}</span></div>
            <div className='bg-white text-black p-2 rounded-md space-x-2 cursor-pointer hover:bg-gray-400 duration-300'><span className='py-1 px-2 rounded-full bg-[#1A1A1A] text-white text-xs'>4</span><span>{quizData.questions[0].options[3].option}</span></div>
          </div>
          <div className='w-full'>
            <button className='p-2 bg-[#39FF14] text-black font-bold w-full rounded-full cursor-pointer animate-pulse hover:animate-none hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] duration-300'>Next Question</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
