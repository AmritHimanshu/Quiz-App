"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';


export default function Page() {
    const router = useRouter();
    const [result, setResult] = useState(null);

    useEffect(() => {
        const storedResult = localStorage.getItem("quizResult");
        if (storedResult) {
            setResult(JSON.parse(storedResult));
        }
    }, []);

    useEffect(() => {
        if (!result) return;
      
        confetti({
          particleCount: 200,
          spread: 1000,
          origin: { y: 0.5 },
          colors: ['#00FFFF', '#39FF14', '#FFD700', '#9D00FF'],
          scalar: 1.2
        });
      
      }, [result]);      

    if (!result) {
        return (
            <div className="text-[#E0E0E0] bg-[#1A1A1A] min-h-screen p-5 flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-[#1A1A1A] text-[#E0E0E0] min-h-screen">
            <Header />

            <div className="max-w-4xl mx-auto p-6 space-y-10">
                <div className="flex items-center gap-3 text-[#39FF14] text-3xl font-bold">
                    <button
                        onClick={() => router.back()}
                        className="hover:scale-105 transition-transform text-[#00FFFF]"
                    >
                        ←
                    </button>
                    <span>{result.name}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-[#9D00FF] shadow-[0_0_25px_#9D00FF]">
                    {[
                        { label: "🪙 Coin Earned", value: result.coin, animateCoin: true },
                        { label: "🏆 Your Score", value: result.score },
                        { label: "✅ Correct", value: result.correct },
                        { label: "❌ Incorrect", value: result.incorrect },
                        { label: "📊 Accuracy", value: result.accuracy },
                        { label: "⏱️ Time Spent", value: result.timeSpent },
                        { label: "➖ Unattempted", value: result.unattempted },
                        { label: "🕒 Time/Ques", value: result.timePerQuestion },
                        { label: "🥉 Live Rank", value: result.liveRank, fullSpan: true },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 150 }}
                            className={`bg-[#0c2b35] p-4 rounded-md border border-[#00FFFF] hover:shadow-[0_0_15px_#00FFFF] transition-shadow ${item.fullSpan ? "col-span-full sm:col-span-2" : ""}`}
                        >
                            <div className="text-lg font-semibold flex items-center gap-2 text-gray-300">
                                {item.label}
                            </div>

                            <div className="text-2xl font-bold mt-1 text-[#39FF14] relative">
                                {item.value}
                                {item.animateCoin && (
                                    <motion.span
                                        className="absolute -top-5 right-0 text-yellow-400 text-xl font-bold"
                                        initial={{ y: 0, opacity: 1 }}
                                        animate={{ y: -30, opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut", repeat: 2 }}
                                    >
                                        +{item.value} 💰
                                    </motion.span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div>
                    <button
                        onClick={() => router.push("/quiz/match/leaderboard")}
                        className="w-full p-3 bg-[#39FF14] text-black font-bold rounded-full cursor-pointer relative overflow-hidden hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                    >
                        Leaderboard
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="h-full w-full animate-glass bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
