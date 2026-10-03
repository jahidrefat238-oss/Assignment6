import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const link = (
        <>
            <li><Link href="/workouts" className="rounded-full px-5 py-2 text-sm hover: bg-[#18220b]font-semibold text-[#c6ff00]" > Workouts</Link></li>
            <li><Link href="/myPlan" className="px-5 py-2 text-sm text-gray-400 hover:text-white"> My Plan </Link> </li>
        </>
    );

    return (
        <div className=" border-b border-[#1f2024]">
            <div className="navbar min-h-[88px] bg-[#0d0e10] px-6">

                {/* Left Side */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost px-2 lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-[#151619] p-2 shadow-lg"
                        >
                            {link}
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            className="h-8 w-8 object-contain"
                            width={400}
                            height={400}
                            alt="nav_logo"
                            src="/logo.png"
                        />

                        <span className="text-lg font-bold tracking-wide text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                {/* Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-1 p-0">
                        {link}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="navbar-end gap-6">

                    {/* Plan */}
                    <Link
                        href="/myPlan"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                    >
                        <span>Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6ff00] px-1 text-xs font-bold text-black">
                            0
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/saved"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                    >
                        <span>Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#34363b] px-1 text-xs text-gray-300">
                            0
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;