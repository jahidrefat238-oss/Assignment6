import Image from "next/image";

const Hero = () => {
    return (
        <div className="mx-auto mt-9 max-w-[1200px] rounded-xl border border-[#24262c] bg-[#15161b] px-10 py-10">
            <div className="flex items-center justify-between">
                <div>
                    <p className="mb-5 text-xs font-bold tracking-wider text-[#c6ff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-[600px] text-5xl font-black text-white">
                        TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>

                    <p className="mt-5 max-w-[520px] text-sm text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>

                    <button className="mt-6 rounded-md bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black hover:bg-[#b8f000]">
                        BROWSE WORKOUTS
                    </button>
                </div>

                <div>
                    <Image src="/banner.png"
                        alt="Workout"
                        width={280}
                        height={280}
                        className="h-[280px] w-[280px] object-contain"></Image>
                </div>

            </div>
        </div>
    );
};

export default Hero;