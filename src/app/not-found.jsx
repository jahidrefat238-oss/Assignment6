import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d0e11] px-6 text-center">

            <p className="text-sm font-bold tracking-widest text-[#c6ff00]">
                404
            </p>

            <h1 className="mt-3 text-4xl font-extrabold uppercase text-white">
                Page Not Found
            </h1>

            <p className="mt-3 text-sm text-gray-500">
                The workout you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-7 rounded-md bg-[#c6ff00] px-6 py-3 text-xs font-bold text-black transition-all duration-200 hover:-translate-y-1 hover:bg-[#d9ff66]]"
            >
                BACK TO HOME
            </Link>

        </main>
    );
};

export default NotFound;