import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getUser, loginUser } from '../../data/user/user.api';
import { Queries, queryClient } from '../../data/react-query';
import { signal, useSignal } from '@preact/signals-react';
import { IUser } from '../../data/user/user.types';
import { isAuthed } from '../../data/store';
import { useSetAtom } from 'jotai';
import { useHistory } from 'react-router';

export const currentUsername = signal('');
export const currentUser = signal({
    user_id: 0,
    username: '',
    password_hash: '',
    email: '',
    created_at: new Date()
} as IUser);

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const setIsAuthed = useSetAtom(isAuthed);
    
    async function submitForm() {
        var result = await loginUser(username, password);
        if (result.user_id) {
            currentUser.value = result;
            setIsAuthed(true);
            history.push("/dashboard");
        }
    }

    return (
        <IonPage>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Login User</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonInput 
                                label='Username' 
                                value={username} onIonInput={(val) => setUsername(val.detail.value || '')} 
                            />
                        </IonItem>
                        <IonItem>                               
                            <IonInput 
                                label='Password'
                                type='password' 
                                value={password} 
                                onIonInput={(val) => setPassword(val.detail.value || '')} 
                            />
                        </IonItem>
                        <IonButton className="ion-margin-top" type="submit" expand="block" onClick={() => submitForm()}>
                            Login
                        </IonButton>
                    </IonCardContent>
                </IonCard>
          </IonContent>
        </IonPage>
      );
};

export default Login;
