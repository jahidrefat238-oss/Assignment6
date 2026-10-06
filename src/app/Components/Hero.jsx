import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <div className="mx-auto mt-9 max-w-[1200px] rounded-xl border border-[#24262c] bg-[#15161b] px-10 py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="mb-5 text-xs font-bold tracking-wider text-[#c6ff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-[600px] text-5xl font-black text-white">
                        TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>

                    <p className="mt-5 max-w-[520px] text-sm text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>

                    <Link href="#library">
                        <button className="mt-6 flex items-center gap-2 rounded-md bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black hover:font-bold cursor-pointer hover:-translate-y-1">
                            BROWSE WORKOUTS
                            <ArrowDown size={14} />
                        </button>
                    </Link>
                </div>

                <div>
                    <Image src="/banner.png"
                        alt="Workout"
                        width={280}
                        height={280}
                        className="h-52 w-52 object-contain sm:h-64 sm:w-64 lg:h-[280px] lg:w-[280px]">

                    </Image>
                </div>

            </div>
        </div>
    );
};

export default Hero;