'use client'

import { useContext } from "react";
import { Context } from "../context/PlanContext";

const ButtonAction = ({workout}) => {
const {todaysPlan,setTodaysPlan}=useContext(Context)
const handleTodaysPlan=()=>{
        setTodaysPlan([...todaysPlan,workout])
}
    return (
        <div className="mt-6 flex gap-3">
            <button onClick={handleTodaysPlan} className="rounded-lg bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black"> Add to today's plan</button>
            <button className="rounded-lg border border-[#30333b] px-5 py-3 font-bold text-xs text-gray-300">Save for later</button>
        </div>
    );
};

export default ButtonAction;