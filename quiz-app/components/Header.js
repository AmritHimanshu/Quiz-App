import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    MTS
                </div>

                {/* <nav className="space-x-6">
                    <Link href="/abc" className="text-gray-700 hover:text-blue-600 font-medium">
                        Discover
                    </Link>
                    <Link href="/def" className="text-gray-700 hover:text-blue-600 font-medium">
                        AI
                    </Link>
                    <Link href="/ghi" className="text-gray-700 hover:text-blue-600 font-medium">
                        Join
                    </Link>
                    <Link href="/ghi" className="text-gray-700 hover:text-blue-600 font-medium">
                        Live Quiz
                    </Link>
                    <Link href="/ghi" className="text-gray-700 hover:text-blue-600 font-medium">
                        Login
                    </Link>
                    <Link href="/ghi" className="text-gray-700 hover:text-blue-600 font-medium">
                        Register
                    </Link>
                </nav> */}
            </div>
        </header>
    );
}
