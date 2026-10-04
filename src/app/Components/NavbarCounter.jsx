"use client";

import { useContext } from "react";
import { Context } from "../context/PlanContext";

const NavbarCounter = ({ type }) => {
    const { todaysPlan, saveForLater } = useContext(Context);

    return (
        <span
            className={
                type === "plan"? "flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6ff00] px-1 text-xs font-bold text-black": "flex h-5 min-w-5 items-center justify-center rounded-full border border-[#34363b] px-1 text-xs text-gray-300"
            }
        >
            {type === "plan" ? todaysPlan.length : saveForLater.length}
        </span>
    );
};

export default NavbarCounter;