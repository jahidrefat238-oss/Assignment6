'use client'

import { useContext } from "react";
import { Context } from "../context/PlanContext";
import { toast } from "react-toastify";

const ButtonAction = ({ workout }) => {
    const { todaysPlan, setTodaysPlan, saveForLater, setSaveForLater } = useContext(Context)
    const handleTodaysPlan = () => {
        const alreadyAdded = todaysPlan.find(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.info("Workout is already added!");
            return;
        }
        if (todaysPlan.length >= 5) {
            toast.info("You can add maximum 5 workouts!");
            return;
        }
        setTodaysPlan([...todaysPlan, workout])
        toast.success("Workout added to today's plan!");
    }
    const handleSaveForLater = () => {
        const alreadySaved = saveForLater.find(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.info("Workout is already saved!");
            return;
        }
        setSaveForLater([...saveForLater, workout])
        toast.success("Workout saved for later!");
    }
    return (
        <div className="mt-6 flex gap-3">
            <button onClick={handleTodaysPlan} className="rounded-lg bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black  transition hover:bg-[#d4ff4d] hover:scale-105 cursor-pointer "> Add to today's plan</button>
            <button onClick={handleSaveForLater} className="rounded-lg border border-[#30333b] px-5 py-3 font-bold text-xs text-gray-300 transition hover:border-[#c6ff00] hover:text-[#c6ff00] hover:scale-105 cursor-pointer">Save for later</button>
        </div>
    );
};

export default ButtonAction;