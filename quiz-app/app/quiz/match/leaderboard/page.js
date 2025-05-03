"use client";

import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

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

    // Dummy data
    const leaderboard = [
        { name: "Sarthaksquiz", score: 36, rank: 1 },
        { name: "Onni Häninnen", score: 36, rank: 2 },
        { name: "Maryam Abdulkader", score: 36, rank: 3 },
        { name: "Ohm Narayan", score: 24, rank: 4 },
        { name: "Code Catalyst", score: 12, rank: 5 },
        { name: "Vikash Kumar", score: 12, rank: 6 },
    ];

    const crownIcons = [
        "👑",
        "🥈",
        "🥉",
    ];

    if (!result) {
        return (
            <div className="text-[#E0E0E0] bg-[#1A1A1A] min-h-screen p-5 flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#1A1A1A] text-[#E0E0E0] px-4 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#00FFFF] mb-10">🏆 Leaderboard</h1>

                <div className="flex justify-center items-end gap-6 mb-14">
                    {leaderboard.slice(0, 3).map((player, index) => (
                        <motion.div
                            key={player.name}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                        >
                            <div
                                key={player.name}
                                className={`flex flex-col items-center justify-end bg-[#2A2A2A] rounded-xl px-4 py-6 w-30 lg:w-36 h-${index === 0 ? "64" : index === 1 ? "56" : "52"}`}
                                style={{ borderTop: `4px solid ${index === 0 ? "#00FFFF" : index === 1 ? "#9D00FF" : "#39FF14"}` }}
                            >
                                <div className="text-3xl mb-2">{crownIcons[index]}</div>
                                <div className="font-bold text-lg">{player.name}</div>
                                <div className={`mt-1 text-xl font-semibold text-${index === 0 ? "[#00FFFF]" : index === 1 ? "[#9D00FF]" : "[#39FF14]"}`}>
                                    {player.score}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-3">
                    <div className={`flex justify-between items-center bg-[#585858] rounded-lg px-5 py-3 hover:scale-105 duration-300}`}>
                        <div className="flex items-center gap-4">
                            <div className="text-lg font-bold text-[#9D00FF]">#{result.rank}</div>
                            <div className="text-base">You</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-[#39FF14]">{result.score}</span>
                            <span className="text-yellow-400">🪙</span>
                        </div>
                    </div>
                    {leaderboard.slice(3).map((player, idx) => (
                        <motion.div
                            key={player.name}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                        >
                            <div className={`flex justify-between items-center bg-[#2A2A2A] rounded-lg px-5 py-3 hover:scale-105 duration-300}`}>
                                <div className="flex items-center gap-4">
                                    <div className="text-lg font-bold text-[#9D00FF]">#{player.rank}</div>
                                    <div className="text-base">{player.name}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-semibold text-[#39FF14]">{player.score}</span>
                                    <span className="text-yellow-400">🪙</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full my-10 py-3 bg-[#39FF14] text-black font-bold rounded-full hover:drop-shadow-[0_0_15px_#00FFFF] transition duration-300 cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    Home
                </motion.button>
            </div>
        </main>
    );
}
