'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import quizMap from "@/database/quizQuestion";
import Image from 'next/image';
import Header from '@/components/Header';
import { motion } from "framer-motion";


export default function Page() {
  const router = useRouter();
  const params = useParams();
  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  const countdown = 10;

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(countdown);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [totalCoins, setTotalCoins] = useState(0);
  const autoAdvanceTimerRef = useRef(null);

  useEffect(() => {
    setQuestions(quizData.questions);
  }, [quizData]);

  useEffect(() => {
    setTimeLeft(countdown);
    setIsAnswered(false);
    clearTimeout(autoAdvanceTimerRef.current);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (isAnswered) return;

    if (timeLeft === 0) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onResult();
      }
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, currentQuestionIndex, questions?.length]);

  const handleOptionSelect = (option) => {
    if (isAnswered) return;

    clearTimeout(autoAdvanceTimerRef.current);

    if (questions[currentQuestionIndex].correct_answer === option) {
      setTotalCoins((prev) => prev + 1);
    }

    const answer = [...userAnswers];
    answer[currentQuestionIndex] = option;
    setUserAnswers(answer);
    setIsAnswered(true);

    autoAdvanceTimerRef.current = setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        onResult();
      }
    }, 5000);
  };

  const onNextQuestion = () => {
    clearTimeout(autoAdvanceTimerRef.current);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const onResult = () => {
    clearTimeout(autoAdvanceTimerRef.current);

    const totalQuestions = questions.length;
    const correct = userAnswers.filter((ans, idx) => ans === questions[idx]?.correct_answer).length;
    const incorrect = totalQuestions - correct;
    const unattempted = userAnswers.filter((ans) => !ans).length;
    const accuracy = ((correct / totalQuestions) * 100).toFixed(0);
    const totalTimeSpent = totalQuestions * countdown;
    const avgTimePerQues = (totalTimeSpent / totalQuestions).toFixed(0);

    const resultData = {
      name: quizData.name,
      coin: totalCoins,
      score: totalCoins,
      correct,
      incorrect,
      accuracy: `${accuracy} %`,
      timeSpent: `${totalTimeSpent} sec`,
      unattempted,
      timePerQuestion: `${avgTimePerQues} sec`,
      liveRank: 5,
    };

    localStorage.setItem('quizResult', JSON.stringify(resultData));
    router.push('/quiz/match/result');
  };

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center h-[calc(100vh-90px)]">
          <div className="w-[600px] bg-[#111] text-white rounded-lg p-6 space-y-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-[#39FF14]">{quizData.name}</div>
              <div className="text-yellow-300 font-bold text-lg">💰 {totalCoins} coins</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm font-semibold">
                <span>Question {currentQuestionIndex + 1} of {quizData.noOfQuestions}</span>
                <span className="text-[#39FF14]">⏳ {timeLeft}s</span>
              </div>

              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#39FF14] transition-all duration-100 ease-linear"
                  style={{ width: `${(timeLeft / countdown) * 100}%` }}
                ></div>
              </div>
            </div>

            {questions[currentQuestionIndex]?.image && (
              <div className="relative w-full h-[250px] rounded-md overflow-hidden drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Image
                  src={questions[currentQuestionIndex].image}
                  alt="Question Image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}

            <div className="text-lg font-semibold">Q. {questions[currentQuestionIndex]?.question}</div>

            <div className="space-y-4">
              {questions[currentQuestionIndex]?.options.map((option, idx) => {
                const selectedOption = userAnswers[currentQuestionIndex];
                const correctAnswer = questions[currentQuestionIndex]?.correct_answer;

                let bgColor = "bg-white text-black";
                if (isAnswered) {
                  if (option.option === correctAnswer) {
                    bgColor = "bg-green-400 text-white";
                  } else if (option.option === selectedOption && option.option !== correctAnswer) {
                    bgColor = "bg-red-400 text-white";
                  }
                } else if (selectedOption === option.option) {
                  bgColor = "bg-gray-400 text-white";
                }

                return (
                  <div
                    key={option.id}
                    onClick={() => handleOptionSelect(option.option)}
                    className={`cursor-pointer rounded-md px-4 py-2 font-semibold flex items-center space-x-3 hover:bg-gray-500 transition duration-300 ${bgColor}`}
                  >
                    <span className="bg-[#1A1A1A] text-white px-2 py-1 text-xs rounded-full">{idx + 1}</span>
                    <span>{option.option}</span>
                  </div>
                );
              })}
            </div>

            <div>
              {currentQuestionIndex < questions.length - 1 && userAnswers[currentQuestionIndex] && isAnswered && (
                <button
                  onClick={onNextQuestion}
                  className="relative overflow-hidden w-full bg-[#39FF14] text-black font-bold py-2 rounded-full mt-3 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] transition duration-300"
                >
                  Next Question
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="h-full w-full animate-glass bg-gradient-to-r from-transparent via-[#1A1A1A]/80 to-transparent"></div>
                  </div>
                </button>
              )}

              {currentQuestionIndex >= questions.length - 1 && (
                <button
                  onClick={onResult}
                  className="w-full bg-[#39FF14] text-black font-bold py-2 rounded-full mt-3 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] transition duration-300"
                >
                  Result
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
