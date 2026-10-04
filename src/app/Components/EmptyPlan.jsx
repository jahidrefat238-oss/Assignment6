const EmptyPlan = ({ type }) => {
    return (
        <div className="flex min-h-[250px] items-center justify-center rounded-xl border border-dashed border-[#24262c]">

            <p className="text-sm text-gray-500">
                {type === "today"? "No workouts added to today's plan yet." : "No saved workouts yet."}
            </p>

        </div>
    );
};

export default EmptyPlan;