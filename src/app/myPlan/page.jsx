"use client";

import { useContext, useState } from "react";
import { Context } from "../context/PlanContext";
import MyPlanCard from "../Components/MyPlanCard";
import PlanMetrics from "../Components/PlanMatrices";
import PlanTabs from "../Components/PlanTabs";
import EmptyPlan from "../Components/EmptyPlan";

const MyPlan = () => {
    const { todaysPlan, saveForLater } = useContext(Context);
    const [activeTab, setActiveTab] = useState("today");

    const totalMinutes = todaysPlan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = todaysPlan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

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
            <PlanMetrics todaysPlan={activeTab === "today" ? todaysPlan : saveForLater}></PlanMetrics>


            {/* Tabs + Sort */}
            <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab}></PlanTabs>


            {/* Workout List */}
            <div className="mt-4">

                {activeTab === "today" ? (

                    todaysPlan.length > 0 ? (

                        <div className="space-y-4">

                            {todaysPlan.map((workout) => (
                                <MyPlanCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            ))}

                        </div>

                    ) : (

                        <EmptyPlan type="today" />

                    )

                ) : (

                    saveForLater.length > 0 ? (

                        <div className="space-y-4">

                            {saveForLater.map((workout) => (
                                <MyPlanCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            ))}

                        </div>

                    ) : (

                       <EmptyPlan type="saved" />

                    )

                )}

            </div>

        </main>
    );
};

export default MyPlan;