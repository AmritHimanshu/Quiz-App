"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import quizMap from "@/database/quizQuestion";

function Page() {
  const params = useParams();

  const quizId = params.quiz_id;
  const quizData = quizMap[quizId];

  console.log(quizData);

  return (
    <div>
      <div>This is question page</div>
    </div>
  )
}

export default Page
