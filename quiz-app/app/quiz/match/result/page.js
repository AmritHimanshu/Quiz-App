"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const [result, setResult] = useState(null);

    useEffect(() => {
        const storedResult = localStorage.getItem("quizResult");
        if (storedResult) {
            setResult(JSON.parse(storedResult));
        }
    }, []);

    if (!result) return <div className="text-[#E0E0E0] bg-[#1A1A1A] min-h-screen p-5">Loading...</div>;

    return (
        <div className="bg-[#1A1A1A] text-[#E0E0E0] min-h-screen">
            <Header />

            <div className="max-w-4xl mx-auto p-6">
                <div className="flex items-center mb-6">
                    <span className="text-[#00FFFF] text-2xl mr-3 cursor-pointer hover:scale-105 transition-transform">←</span>
                    <h1 className="text-3xl font-bold text-[#00FFFF]">{result.name}</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#2a2a2a] p-6 rounded-xl border border-[#9D00FF] shadow-[0_0_20px_#9D00FF]">
                    {[
                        { label: "🪙 Coin Earned", value: result.coin },
                        { label: "🏆 Your Score", value: result.score },
                        { label: "✅ Correct", value: result.correct },
                        { label: "❌ Incorrect", value: result.incorrect },
                        { label: "📊 Accuracy", value: result.accuracy },
                        { label: "⏱️ Time Spent", value: result.timeSpent },
                        { label: "➖ Unattempted", value: result.unattempted },
                        { label: "🕒 Time/Ques", value: result.timePerQuestion },
                        { label: "🥉 Live Rank", value: result.liveRank, fullSpan: true },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`bg-[#0c2b35] p-4 rounded-md border border-[#00FFFF] hover:shadow-[0_0_15px_#00FFFF] transition-shadow ${item.fullSpan ? "col-span-full sm:col-span-2" : ""
                                }`}
                        >
                            <div className="text-lg font-semibold flex items-center gap-2 text-gray-300">
                                {item.label}
                            </div>
                            <div className="text-2xl font-bold mt-1 text-[#39FF14]">{item.value}</div>
                        </div>
                    ))}
                </div>

                <div className="my-5">
                    <button className="w-full bg-[#39FF14] text-black py-3 rounded-full font-bold relative overflow-hidden hover:drop-shadow-[0_0_15px_#00FFFF] transition-all cursor-pointer" onClick={() => router.push('/quiz/match/leaderboard')}>
                        Leaderboard
                    </button>
                </div>
            </div>
        </div>
    );
}