import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { currentUser } from '../Login/Login';
import { computed } from '@preact/signals-react';
import { useQueryClient } from '@tanstack/react-query';
import { getWorkouts } from '../../data/workout/workout.api';
import { IWorkout } from '../../data/workout/workout.types';
import DashboardWorkoutCard from './Dashboard-WorkoutCard';
import DashboardUserCard from './Dashboard-UserCard';

const Dashboard: React.FC = () => {

    const queryClient = useQueryClient();

    const { data, error, isLoading } = getWorkouts();

    const workoutCount = data?.length;

    const username = computed(() => {
        return currentUser.value.username;
      });

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      
      return (
        <IonPage>
            <IonContent fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <DashboardUserCard />
                    </IonCol>
                    <IonCol>
                        <DashboardWorkoutCard />
                    </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
