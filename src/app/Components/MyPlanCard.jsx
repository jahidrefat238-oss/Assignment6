import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../context/PlanContext";
import { toast } from "react-toastify";
const MyPlanCard = ({ workout, type }) => {
    const { todaysPlan, setTodaysPlan, saveForLater, setSaveForLater } = useContext(Context);
    const { name, image, equipment, duration, caloriesBurned, rating } = workout;
    const handleDone = () => {
        const updatedPlan = todaysPlan.filter(
            (item) => item.id !== workout.id
        );

        setTodaysPlan(updatedPlan);
        toast.success("Workout completed!");
    };
    const handleRemove = () => {
        const updatedPlan = todaysPlan.filter(
            (item) => item.id !== workout.id
        );

        setTodaysPlan(updatedPlan);

        const updatedSaved = saveForLater.filter(
            (item) => item.id !== workout.id
        );

        setSaveForLater(updatedSaved);
        toast.success("Workout removed!");
    };
    return (
        <div className="flex items-center gap-5 rounded-xl border border-[#24262c] bg-[#15161b] p-4">
            {/* Image */}
            <Image
                src={image}
                alt={name}
                width={200}
                height={150}
                className="h-24 w-32 rounded-lg object-cover"
            />

            {/* Workout Info */}
            <div className="flex-1">
                <h2 className="text-lg font-bold text-white">{name}</h2>

                <p className="mt-1 text-xs text-gray-500">{equipment}</p>

                <div className="mt-3 flex gap-5 text-[10px] text-gray-400">
                    <span>{duration} min</span>
                    <span>{caloriesBurned} kcal</span>
                    <span>★ {rating}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <Link href={`/workouts/${workout.id}`}>
                    <button className="rounded-lg border border-[#30333b] px-4 py-2 text-[10px] font-bold text-gray-300 transition hover:scale-105 hover:bg-[#50601a] cursor-pointer">
                        View Details
                    </button>
                </Link>
                {type !== "saved" && (
                    <button onClick={handleDone} className="rounded-lg bg-[#c6ff00] px-4 py-2 text-[10px] font-bold text-black transition hover:scale-105 hover:bg-[#d4ff4d] cursor-pointer">
                        Mark as Done
                    </button>
                )}
                <button onClick={handleRemove} className="px-2 text-gray-500 hover:text-red-400 cursor-pointer">✕</button>
            </div>
        </div>
    );
};

export default MyPlanCard;
