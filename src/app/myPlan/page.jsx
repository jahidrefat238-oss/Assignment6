"use client";

import { useContext } from "react";
import { Context } from "../context/PlanContext";
import MyPlanCard from "../Components/MyPlanCard";

const MyPlan = () => {
    const { todaysPlan } = useContext(Context);

    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-8">

            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-extrabold uppercase text-white">
                    My Plan
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 rounded-xl border border-[#24262c] bg-[#15161b]">

                <div className="px-5 py-6">
                    <p className="text-[10px] text-gray-500">
                        Exercises
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-[#c6ff00]">
                        {todaysPlan.length}
                    </h2>
                </div>


                <div className="border-l border-[#24262c] px-5 py-6">
                    <p className="text-[10px] text-gray-500">
                        Minutes
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-white">
                        0
                    </h2>
                </div>


                <div className="border-l border-[#24262c] px-5 py-6">
                    <p className="text-[10px] text-gray-500">
                        Calories
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-white">
                        0
                    </h2>
                </div>

            </div>


            {/* Tabs + Sort */}
            <div className="mt-6 flex items-center justify-between">

                <div className="tabs tabs-lift">

                    <input
                        type="radio"
                        name="my_tabs"
                        className="tab"
                        aria-label="Today's Plan"
                        defaultChecked
                    />

                    <div className="tab-content border-[#24262c] bg-[#15161b] p-4">
                    </div>


                    <input
                        type="radio"
                        name="my_tabs"
                        className="tab"
                        aria-label="Saved"
                    />

                    <div className="tab-content border-[#24262c] bg-[#15161b] p-4">
                    </div>

                </div>


                <div className="flex items-center gap-2">

                    <span className="text-[10px] text-gray-500">
                        Sort By
                    </span>

                    <select className="rounded-lg border border-[#30333b] bg-[#15161b] px-3 py-2 text-[10px] text-gray-300 outline-none">
                        <option>Duration</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>

                </div>

            </div>


            {/* Workout List */}
            <div className="mt-4">

                {todaysPlan.length > 0 ? (

                    <div className="space-y-4">

                        {todaysPlan.map((workout) => (
                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="min-h-[250px] rounded-xl border border-dashed border-[#24262c] flex items-center justify-center">

                        <p className="text-sm text-gray-500">
                            No workouts added to today's plan yet.
                        </p>

                    </div>

                )}

            </div>

        </main>
    );
};

export default MyPlan;