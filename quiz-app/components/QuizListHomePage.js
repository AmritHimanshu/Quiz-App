import Image from 'next/image';
import React from 'react';
import '../styles/QuizListHomePage.css';

function QuizListHomePage({ data }) {

    return (
        <div className='space-y-10'>
            {Object.entries(data).map(([category, quizzes], index) => (
                <div key={category} className='py-3 space-y-2'>
                    <div className='font-bold text-xl'>{category}</div>
                    <div className='overflow-x-scroll rounded-md'>
                        <div className='flex space-x-5 min-w-max'>
                            {quizzes.map((quiz) => (
                                <div key={quiz.id} className='bg-white text-black rounded-md overflow-hidden cursor-pointer group'>
                                    <div className='relative w-72 h-48 overflow-hidden'>
                                        <Image
                                            src={quiz.image}
                                            alt={quiz.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className='group-hover:scale-105 transform transition-transform duration-300'
                                        />
                                    </div>
                                    <div className='text-sm p-2'>{quiz.name}</div>
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
