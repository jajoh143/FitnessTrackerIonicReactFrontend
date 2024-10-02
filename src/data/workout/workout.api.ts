import axios from "axios";
import { constructWorkout } from "./workout.model";
import { IWorkout } from "./workout.types";
import { useQuery } from "@tanstack/react-query";

export enum Queries {
    Workouts = "workouts"
}

const fetchWorkouts = async(): Promise<IWorkout[]> => {
    const { data } = await axios.get<IWorkout[]>("http://localhost:3000/workout");
    return data;
}

export const getWorkouts = () => {
    return useQuery<IWorkout[], Error>({
        queryKey: [Queries.Workouts],
        queryFn: fetchWorkouts
    });
}