import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { currentUser } from '../Login/Login';
import { computed } from '@preact/signals-react';
import { getWorkouts } from '../../data/workout/workout.api';

const DashboardUserCard: React.FC = () => {

    const { data, error, isLoading } = getWorkouts();

    const workoutCount = data?.length;

    const username = computed(() => {
        return currentUser.value.username;
      });

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      
      return (
        <IonCard>
        <IonCardHeader>
            <IonCardTitle>Welcome {currentUser.value.username}</IonCardTitle>    
        </IonCardHeader>
        <IonCardContent>
            <p>
                Today is {new Date().toDateString()}    
            </p>
            <p>
                Overall, you have completed <b>{workoutCount}</b> workouts
            </p>
        </IonCardContent>            
    </IonCard>
    );
};

export default DashboardUserCard;
