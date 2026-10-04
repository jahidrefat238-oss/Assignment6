"use client";

import { useState } from "react";
import MyPlanCard from "./MyPlanCard";

const PlanSort = ({ workouts, type }) => {
    const [sortBy, setSortBy] = useState("duration");

    const sortedWorkouts = [...workouts];
    console.log(workouts);

    if (sortBy === "duration") {
        sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
        sortedWorkouts.sort(
            (a, b) => b.caloriesBurned - a.caloriesBurned
        );
    } else if (sortBy === "rating") {
        sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return (
        <>
            <div className="flex items-center justify-end gap-2">
                <span className="text-[10px] text-gray-500">
                    Sort By
                </span>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-[#30333b] bg-[#15161b] px-3 py-2 text-[10px] text-gray-300 outline-none transition hover:border-[#c6ff00]"
                >
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            <div className="mt-4 space-y-4">
                {sortedWorkouts.map((workout) => (
                    <MyPlanCard
                        key={workout.id}
                        workout={workout}
                        type={type}
                    />
                ))}
            </div>
        </>
    );
};

export default PlanSort;