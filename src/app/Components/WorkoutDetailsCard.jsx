import Image from "next/image";
import ButtonAction from "./ButtonAction";

const WorkoutDetailsCard = ({ workout }) => {
    const { id, name, image, muscleGroups, difficulty, rating, duration, caloriesBurned, equipment, sets, reps, description, instructions } = workout
    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="grid gap-8 lg:grid-cols-2">
                <div className=" rounded-xl">
                    <Image src={image} alt={name} width={700} height={700} className=" rounded-xl w-full object-contain" ></Image>
                </div>


                <div>
                    <h1 className="text-3xl font-extrabold uppercase text-white">
                        {name}
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                        {description}
                    </p>

                    {/* Badges */}
                    <div className="mt-4 flex gap-2">
                        {muscleGroups.length === 2 ? <div className="flex gap-2">
                            <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[0]}</span>
                            <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[1]}</span>
                        </div> : <div className="flex gap-2">
                            <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[0]}</span>
                            {/* <span className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold text-black">{muscleGroups[1]}</span> */}
                        </div>}
                    </div>

                    {/* Info */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#24262c] bg-[#15161b]">

                        <div className="flex justify-between border-b border-[#24262c] px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500">
                                EQUIPMENT
                            </span>
                            <span className="text-xs text-gray-300">
                                {equipment}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#24262c] px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500">
                                DIFFICULTY
                            </span>
                            <span className="text-xs text-gray-300">
                                {difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#24262c] px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500">
                                SETS
                            </span>
                            <span className="text-xs text-gray-300">
                                {sets}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#24262c] px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500"> REPS</span>
                            <span className="text-xs text-gray-300">{reps} </span>
                        </div>

                        <div className="flex justify-between border-b border-[#24262c] px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500"> DURATION </span>
                            <span className="text-xs text-gray-300"> {duration}</span>
                        </div>

                        <div className="flex justify-between border-b border-[#24262c] px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500">CALORIES</span>
                            <span className="text-xs text-gray-300"> {caloriesBurned} </span>
                        </div>

                        <div className="flex justify-between px-4 py-3">
                            <span className="text-[10px] font-bold text-gray-500">RATING</span>
                            <span className="text-xs text-gray-300">{rating} </span>
                        </div>

                    </div>


                    <div className="mt-5">
                        <h2 className="text-sm font-bold uppercase text-white"> Instructions</h2>

                        <ol className="mt-3 space-y-2 text-xs leading-5 text-gray-400">
                            <li>1.  {instructions[0]}</li>
                            <li>2.  {instructions[1]}</li>
                            <li>3.  {instructions[2]}</li>
                            <li>4.  {instructions[3]}</li>

                        </ol>
                    </div>

                    {/* Buttons */}
                    {/* <div className="mt-6 flex gap-3">
                        <button className="rounded-lg bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black"> Add to today's plan</button>

                        <button className="rounded-lg border border-[#30333b] px-5 py-3 font-bold text-xs text-gray-300">Save for later</button>
                    </div> */}
                    <ButtonAction workout={workout}></ButtonAction>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsCard;