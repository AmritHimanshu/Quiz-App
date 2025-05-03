import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full bg-[#0c0c0c] border-b border-[#9D00FF] shadow-[0_0_15px_#9D00FF] px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl font-extrabold text-[#39FF14] hover:text-[#00FFFF] tracking-wide transition duration-300 drop-shadow-[0_0_5px_#39FF14]">
                    MTS
                </Link>

                <nav className="flex gap-6 text-lg">
                    {["Discover", "AI", "Join", "Live Quiz", "Login", "Register"].map((item) => (
                        <Link
                            key={item}
                            href="/"
                            className="relative text-[#E0E0E0] hover:text-[#00FFFF] font-medium transition duration-200"
                        >
                            <span className="hover:drop-shadow-[0_0_8px_#00FFFF]">{item}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
