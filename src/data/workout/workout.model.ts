import { IWorkout } from './workout.types';

export const constructWorkout = (data: any): IWorkout => {
    return {
        workout_id: data.workout_id,
        workout_name: data.workout_name,
        description: data.description,
        created_at: data.created_at,
        user: data.user,
        workoutExercises: data.workoutExercises
    }
}