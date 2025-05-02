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
                        { label: "🪙 Coins Earned", value: result.coin },
                        { label: "🏆 Your Score", value: result.score },
                        { label: "✅ Correct", value: result.correct },
                        { label: "❌ Incorrect", value: result.incorrect },
                        { label: "📊 Accuracy", value: result.accuracy },
                        { label: "⏱️ Time Spent", value: result.timeSpent },
                        { label: "➖ Unattempted", value: result.unattempted },
                        { label: "🕒 Time/Ques", value: result.timePerQuestion },
                        { label: "🥉 Live Rank", value: result.liveRank, fullSpan: true },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#0c2b35] p-5 rounded-md border border-[#00FFFF] hover:shadow-[0_0_15px_#00FFFF] transition-shadow ${item.fullSpan ? "col-span-full" : ""
                                }`}
                        >
                            <div className="text-base font-semibold text-gray-300 flex items-center gap-2">
                                {item.label}
                            </div>
                            <div className="text-3xl font-bold mt-1 text-[#39FF14]">{item.value}</div>
                        </div>
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
