const PlanMetrics = ({ todaysPlan }) => {

    const totalMinutes = todaysPlan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = todaysPlan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
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
                    {totalMinutes}
                </h2>
            </div>


            <div className="border-l border-[#24262c] px-5 py-6">
                <p className="text-[10px] text-gray-500">
                    Calories
                </p>

                <h2 className="mt-1 text-3xl font-bold text-white">
                    {totalCalories}
                </h2>
            </div>

        </div>
    );
};

export default PlanMetrics;