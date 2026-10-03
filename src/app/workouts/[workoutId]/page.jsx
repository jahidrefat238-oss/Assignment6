
import WorkoutDetailsCard from "@/app/Components/WorkoutDetailsCard";

const WorkoutDetails = async ({params}) => {
    const {workoutId}= await params;
    const res=await fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutId}`)
    const workout=await res.json()
    return (
        <div>
            <WorkoutDetailsCard workout={workout}></WorkoutDetailsCard>
        </div>
    );
};

export default WorkoutDetails;