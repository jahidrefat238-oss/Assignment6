import React from 'react';
import WorkoutLibrary from '../Components/WorkoutLibrary';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

const page = () => {
    return (
        <div>
            <Hero></Hero>
            <WorkoutLibrary></WorkoutLibrary>
        </div>
    );
};

export default page;