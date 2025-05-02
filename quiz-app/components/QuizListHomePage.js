'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/QuizListHomePage.css';

function QuizListHomePage({ data }) {
    const router = useRouter();

    return (
        <div className="space-y-10 w-[90%] max-w-7xl m-auto py-10">
            {Object.entries(data).map(([category, quizzes]) => (
                <div key={category} className="space-y-4">
                    <div className="text-2xl font-bold text-[#00FFFF]">{category}</div>
                    <div className="overflow-x-scroll rounded-lg p-4 bg-[#1A1A1A] border border-[#9D00FF] shadow-[0_0_20px_#9D00FF]">
                        <div className="flex space-x-6 min-w-max">
                            {quizzes.map((quiz) => (
                                <div
                                    key={quiz.id}
                                    onClick={() => router.push(`/quiz/${quiz.id}`)}
                                    className="bg-[#0c2b35] rounded-lg overflow-hidden cursor-pointer border border-[#00FFFF] hover:shadow-[0_0_15px_#00FFFF] transition-shadow group"
                                >
                                    <div className="relative w-72 h-48 overflow-hidden">
                                        <Image
                                            src={quiz.image}
                                            alt={quiz.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="group-hover:scale-105 transform transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-md p-3 font-bold text-[#39FF14] group-hover:text-[#00FFFF] transition-colors">
                                        {quiz.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default QuizListHomePage;
