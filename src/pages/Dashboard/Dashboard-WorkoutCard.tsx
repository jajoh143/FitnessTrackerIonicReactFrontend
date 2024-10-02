import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react';
import { getWorkouts } from '../../data/workout/workout.api';

const DashboardWorkoutCard: React.FC = () => {
    const { data, error, isLoading } = getWorkouts();

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      
      return (
        <IonCard>
            <IonCardHeader>
                <IonRow>
                    <IonCol>
                        <IonCardTitle>All Workouts</IonCardTitle>
                    </IonCol>
                    <IonCol>
                        <IonButton>Add Workout</IonButton>
                    </IonCol>
                </IonRow>
                
            </IonCardHeader>
            <IonCardContent>
                <ul>
                    {data?.map(el => {
                        return <li key={el.workout_id}>{el.name}</li>
                    })}
                </ul>
            </IonCardContent>
        </IonCard>
    );
};

export default DashboardWorkoutCard;
