import Link from "next/link";

const EmptyPlan = ({ type }) => {
    return (
        <div className="flex min-h-[320px] flex-col items-center justify-center text-center">

            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white">
                Nothing Here Yet
            </h2>
            <p className="mt-2 text-lg text-gray-400">
                {type === "today"
                    ? "Browse the library and add a lift to get today moving."
                    : "Save a workout from the library to see it here."}
            </p>

            <Link
                href="/"
                className="mt-8 rounded-full bg-[#c6ff00] px-9 py-4 text-base font-bold text-black shadow-lg transition hover:scale-105 hover:bg-[#d4ff4d]"
            >
                Go to workouts
            </Link>

        </div>
    );
};

export default EmptyPlan;