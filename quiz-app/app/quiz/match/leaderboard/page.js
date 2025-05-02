export default function Page() {
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

    return (
        <main className="min-h-screen bg-[#1A1A1A] text-[#E0E0E0] px-4 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#00FFFF] mb-10">🏆 Leaderboard</h1>

                <div className="flex justify-center items-end gap-6 mb-14">
                    {leaderboard.slice(0, 3).map((player, index) => (
                        <div
                            key={player.name}
                            className={`flex flex-col items-center justify-end bg-[#2A2A2A] rounded-xl px-4 py-6 w-36 h-${index === 0 ? "64" : index === 1 ? "56" : "52"}`}
                            style={{ borderTop: `4px solid ${index === 0 ? "#00FFFF" : index === 1 ? "#9D00FF" : "#39FF14"}` }}
                        >
                            <div className="text-3xl mb-2">{crownIcons[index]}</div>
                            <div className="font-bold text-lg">{player.name}</div>
                            <div className={`mt-1 text-xl font-semibold text-${index === 0 ? "[#00FFFF]" : index === 1 ? "[#9D00FF]" : "[#39FF14]"}`}>
                                {player.score}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-3">
                    {leaderboard.slice(3).map((player) => (
                        <div key={player.name} className={`flex justify-between items-center bg-[#2A2A2A] rounded-lg px-5 py-3 hover:scale-105 duration-300 ${player.rank === 5 ? "bg-[#00FFFF]/20" : ""}`}>
                            <div className="flex items-center gap-4">
                                <div className="text-lg font-bold text-[#9D00FF]">#{player.rank}</div>
                                <div className="text-base">{player.name}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold text-[#39FF14]">{player.score}</span>
                                <span className="text-yellow-400">🪙</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
