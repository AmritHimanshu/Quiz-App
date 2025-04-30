import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full bg-[#9D00FF] shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">
                    MTS
                </div>

                <nav className="space-x-6">
                    <Link href="/" className="text-white hover:text-[#00FFFF] font-medium">
                        Discover
                    </Link>
                    <Link href="/" className="text-white hover:text-[#00FFFF] font-medium">
                        AI
                    </Link>
                    <Link href="/" className="text-white hover:text-[#00FFFF] font-medium">
                        Join
                    </Link>
                    <Link href="/" className="text-white hover:text-[#00FFFF] font-medium">
                        Live Quiz
                    </Link>
                    <Link href="/" className="text-white hover:text-[#00FFFF] font-medium">
                        Login
                    </Link>
                    <Link href="/" className="text-white hover:text-[#00FFFF] font-medium">
                        Register
                    </Link>
                </nav>
            </div>
        </header>
    );
}
