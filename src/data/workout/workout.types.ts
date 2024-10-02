export interface IWorkout {
    workout_id: number;
    workout_name: string;
    description: string;
    created_at: Date;
    user: any;
    workoutExercises: any;
}