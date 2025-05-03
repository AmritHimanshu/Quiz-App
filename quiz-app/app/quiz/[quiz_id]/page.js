'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import quizMap from "@/database/quizQuestion";
import Header from '@/components/Header';
import Image from 'next/image';
import { motion } from "framer-motion";


export default function Page() {
  const params = useParams();
  const router = useRouter();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  const [countdown, setCountdown] = useState(null);
  const [showGameStartText, setShowGameStartText] = useState(false);

  const handlePlayClick = () => {
    setShowGameStartText(true);
    setTimeout(() => {
      setShowGameStartText(false);
      setCountdown(3);
    }, 1000);
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      router.push(`/quiz/match/${quizId}`);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, quizId, router]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative'
      >
        <div className="bg-[#0c0c0c] min-h-screen text-white">
          <Header />
          <div className="flex items-center justify-center h-[calc(100vh-90px)] px-4">
            <div className="w-full max-w-lg bg-[#1A1A1A] rounded-xl p-6 space-y-6 border border-[#9D00FF] shadow-[0_0_20px_#9D00FF]">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-[0_0_15px_#00FFFF]">
                <Image
                  src={quizData.image}
                  alt="Quiz Banner"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <h2 className="text-lg lg:text-3xl font-extrabold text-[#39FF14] text-center">
                {quizData.name}
              </h2>

              <p className="text-center text-[#E0E0E0]">
                Answer these simple questions correctly and earn coins
              </p>

              <div className="text-center font-medium">
                Difficulty Level:
                <span className="ml-2 bg-[#00FFFF] text-black px-3 py-1 rounded-full font-semibold shadow-[0_0_10px_#00FFFF]">
                  {quizData.difficulty_level}
                </span>
              </div>

              <div className="text-center text-lg text-[#CCCCCC]">
                {quizData.noOfQuestions} Questions
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#39FF14] text-black font-bold rounded-full hover:drop-shadow-[0_0_15px_#00FFFF] transition duration-300 cursor-pointer"
                onClick={handlePlayClick}
              >
                Play
              </motion.button>
            </div>
          </div>
        </div>

        {(showGameStartText || countdown !== null) && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center bg-[#111] bg-opacity-90 z-50">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {showGameStartText ? (
                <div className="text-4xl sm:text-5xl font-extrabold text-[#00FFFF] tracking-wide animate-pulse">
                  Game Starts In...
                </div>
              ) : (
                <div className="text-6xl font-bold text-[#00FFFF] animate-ping">
                  {countdown}
                </div>
              )}
            </motion.div>
          </div>
        )}

      </motion.div>
    </>
  );
}
