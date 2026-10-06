import WorkoutCard from "./WorkoutCard";
const getWorkouts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}
const WorkoutLibrary = async () => {
    const workouts = await getWorkouts()
    return (
        <div id="library" className="mx-auto mt-10 max-w-[1200px]">
            <div>
                <h2 className="text-3xl font-bold text-white">
                    THE LIBRARY
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div >
            <div className="mt-6 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map(workout => <WorkoutCard key={workout.id} workoutProps={workout}></WorkoutCard>)}
            </div>



        </div>
    );
};

export default WorkoutLibrary;