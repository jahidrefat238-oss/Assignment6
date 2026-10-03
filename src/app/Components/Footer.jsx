import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-[#1c1e24] bg-[#090a0d] mt-10" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        className="h-8 w-8 object-contain"
                        width={400}
                        height={400}
                        alt="nav_logo"
                        src="/logo.png"
                    />
                    <span className="text-[#c6ff00]"></span>

                    <span className="text-xs font-bold text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-[10px] text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;