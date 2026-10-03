import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workoutProps }) => {
    const { id, name, image, muscleGroups, rating, duration, caloriesBurned, equipment } = workoutProps
    return (
        <Link href={`/workouts/${id}`}>
            <div className="overflow-hidden rounded-xl border border-[#24262c] bg-[#15161b]">
                <div className="h-[180px] bg-[#15161B] flex items-center justify-center">
                    <Image src={image} alt={name} width={400} height={250} className="h-full w-full object-cover"></Image>
                </div>

                <div className="p-4">
                    {/* Badges */}
                    <div>
                        {muscleGroups.length === 2 ? <div className="flex gap-2">
                            <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[0]}</span>
                            <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[1]}</span>
                        </div> : <div className="flex gap-2">
                            <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[0]}</span>
                            {/* <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[1]}</span> */}
                        </div>}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">{name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{equipment}</p>
                    <div className="my-4 border-t border-[#24262c]" />
                    <div className="flex gap-4 text-xs text-gray-400">
                        <span>◷ {duration}</span>
                        <span>♨ {caloriesBurned}</span>
                        <span>☆ {rating}</span>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default WorkoutCard;