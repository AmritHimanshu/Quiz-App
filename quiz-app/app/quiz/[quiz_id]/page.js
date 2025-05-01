'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import quizMap from "@/database/quizQuestion";
import Header from '@/components/Header';
import Image from 'next/image';

export default function Page() {

  const params = useParams();
  const router = useRouter();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  return (
    <div>
      <Header />
      <div className='flex items-center justify-center h-[calc(100vh-90px)]'>
        <div className='w-[500px] m-auto flex flex-col items-center py-3 space-y-5'>
          <div className='relative w-[450px] h-[400px] rounded-md overflow-hidden drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]'>
            <Image src={quizData.image} alt="img" layout="fill" objectFit="contain" />
          </div>
          <div className='text-2xl font-bold'>{quizData.name}</div>
          <div className='text-lg font-semibold'>Answer these simple questions correctly and earn coins</div>
          <div className='font-semibold'>Difficulty Level: <span className='text-green-100 bg-green-600 p-2 rounded-md'>{quizData.difficulty_level}</span></div>
          <div>{quizData.noOfQuestions} Questions</div>
          <button className='p-2 bg-[#39FF14] text-black font-bold w-full rounded-full cursor-pointer animate-pulse hover:animate-none hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] duration-300' onClick={() => router.push(`/quiz/match/${quizId}`)}>Play</button>
        </div>
      </div>
    </div>
  );
}
