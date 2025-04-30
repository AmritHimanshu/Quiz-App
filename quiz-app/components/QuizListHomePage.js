'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/QuizListHomePage.css';

function QuizListHomePage({ data }) {

    const router = useRouter();

    return (
        <div className='space-y-7 w-[80%] m-auto'>
            {Object.entries(data).map(([category, quizzes], index) => (
                <div key={category} className='py-3 space-y-2'>
                    <div className='font-bold text-xl'>{category}</div>
                    <div className='overflow-x-scroll rounded-md p-5'>
                        <div className='flex space-x-10 min-w-max'>
                            {quizzes.map((quiz) => (
                                <div key={quiz.id} className='bg-[#9D00FF] text-white rounded-md overflow-hidden cursor-pointer drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] group' onClick={() => router.push(`/quiz/${quiz.id}`)}>
                                    <div className='relative w-72 h-48 overflow-hidden'>
                                        <Image
                                            src={quiz.image}
                                            alt={quiz.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className='group-hover:scale-105 transform transition-transform duration-300'
                                        />
                                    </div>
                                    <div className='text-sm p-3 font-bold'>{quiz.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default QuizListHomePage
