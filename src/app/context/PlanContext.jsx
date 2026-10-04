'use client'
import { createContext, useState } from "react";
export const Context = createContext({})

const PlanContext = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState([])
    const [saveForLater, setSaveForLater] = useState([])
    
    const sharedData = {
        saveForLater, setSaveForLater, todaysPlan, setTodaysPlan
    }
    return <Context.Provider value={sharedData}>{children}</Context.Provider>
};

export default PlanContext;