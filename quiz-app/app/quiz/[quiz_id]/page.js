'use client';

import React, { useEffect, useState } from 'react';
import quizMap from "@/database/quizQuestion";
import Header from '@/components/Header';
import { useParams } from 'next/navigation';

export default function Page() {

  const params = useParams();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  console.log("quizId:", quizId);
  console.log("quizData:", quizData);

  return (
    <div>
      <Header />
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <button>Play</button>
      </div>
    </div>
  );
}
