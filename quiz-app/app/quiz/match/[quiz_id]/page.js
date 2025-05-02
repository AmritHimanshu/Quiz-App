"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import quizMap from "@/database/quizQuestion";
import Image from 'next/image';

function Page() {
  const params = useParams();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState([]);

  console.log("Questions: ", questions);

  useEffect(() => {
    setQuestions(quizData.questions);
  }, [quizData]);

  const handleOptionSelect = (option) => {
    const answer = [...userAnswers];
    answer[currentQuestionIndex] = option;
    setUserAnswers(answer);
  };

  const onNextQuestion = () => {

  };

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
            {questions[currentQuestionIndex]?.image && <Image src={questions[currentQuestionIndex]?.image} alt="img" layout="fill" objectFit="contain" />}
          </div>
          <div className='w-full'>Q. {questions[currentQuestionIndex]?.question}</div>
          <div className='w-full space-y-5'>
            {questions[currentQuestionIndex]?.options.map((option, idx) => (
              <div key={option.id} className='bg-white text-black p-2 rounded-md space-x-2 cursor-pointer hover:bg-gray-400 duration-300' onClick={() => handleOptionSelect(option.option)}><span className='py-1 px-2 rounded-full bg-[#1A1A1A] text-white text-xs'>{idx + 1}</span><span>{option.option}</span></div>
            ))}
          </div>
          <div className='mb-5 w-full'>
            {userAnswers[currentQuestionIndex] && (
              <div className='w-full'>
                <button className='p-2 bg-[#39FF14] text-black font-bold w-full rounded-full cursor-pointer animate-pulse hover:animate-none hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] duration-300' onClick={onNextQuestion}>Next Question</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
