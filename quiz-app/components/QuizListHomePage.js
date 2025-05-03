'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import '../styles/QuizListHomePage.css';
import { motion } from "framer-motion";

function QuizListHomePage({ data }) {
    const router = useRouter();

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-10 w-[90%] max-w-7xl m-auto py-10">
                    <div className='space-y-4'>
                        <div className="text-2xl font-bold text-[#00FFFF]">Recent</div>
                        <div className="flex space-x-6 min-w-max">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                            >
                                <div
                                    onClick={() => router.push(`/quiz/trending_01`)}
                                    className="bg-[#0c2b35] rounded-lg overflow-hidden cursor-pointer border border-[#00FFFF] hover:shadow-[0_0_15px_#00FFFF] transition-shadow group"
                                >
                                    <div className="relative w-72 h-48 overflow-hidden">
                                        <Image
                                            src="https://dk7h1f5gq849l.cloudfront.net/quiz_images/174591026137c84768-4935-411f-9f89-bf0d22eb6494.png"
                                            alt="Are you true Ronaldo fan?"
                                            layout="fill"
                                            objectFit="cover"
                                            className="group-hover:scale-105 transform transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-md p-3 font-bold text-[#39FF14] group-hover:text-[#00FFFF] transition-colors">
                                        Are you true Ronaldo fan?
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {Object.entries(data).map(([category, quizzes]) => (
                        <div key={category} className="space-y-4">
                            <div className="text-2xl font-bold text-[#00FFFF]">{category}</div>
                            <div className="overflow-x-scroll rounded-lg p-4 bg-[#1A1A1A] border border-[#9D00FF] shadow-[0_0_20px_#9D00FF]">
                                <div className="flex space-x-6 min-w-max">
                                    {quizzes.map((quiz, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                                        >
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
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default QuizListHomePage;
