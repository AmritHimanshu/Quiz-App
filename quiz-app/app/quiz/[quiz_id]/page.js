'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import quizMap from "@/database/quizQuestion";
import Header from '@/components/Header';
import Image from 'next/image';

export default function Page() {

  const params = useParams();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  console.log("quizId:", quizId);
  console.log("quizData:", quizData);

  return (
    <div>
      <Header />
      <div className='w-[500px] m-auto flex flex-col items-center py-3 space-y-5'>
        <div className='relative w-[450px] h-[400px]'>
          <Image src={quizData.image} alt="img" layout="fill" objectFit="cover" />
        </div>
        <div className='text-2xl font-bold'>{quizData.name}</div>
        <div className='text-lg font-semibold'>Answer these simple questions correctly and earn coins</div>
        <div className='font-semibold'>Difficulty Level: <span className='text-green-100 bg-green-600 p-2 rounded-md'>{quizData.difficulty_level}</span></div>
        <div>{quizData.noOfQuestions} Questions</div>
        <button className='p-2 bg-[#39FF14] text-black font-bold w-full rounded-full cursor-pointer'>Play</button>
      </div>
    </div>
  );
}
