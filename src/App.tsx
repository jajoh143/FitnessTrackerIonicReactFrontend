import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

import '@ionic/react/css/palettes/dark.always.css';
import '@ionic/react/css/palettes/dark.class.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login/Login';
import { currentUser } from './pages/Login/Login';
import { computed } from '@preact/signals-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './pages/Dashboard/Dashboard';
import { isAuthed } from './data/store';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';

setupIonicReact();

const queryClient = new QueryClient();

const App: React.FC = () => {

  const username = computed(() => {
    return currentUser.value.username;
  });

  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
          <IonHeader>
            <IonToolbar>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonTitle>Fitness Tracker</IonTitle>
                    </IonCol>
                    <IonCol>
                      <IonTitle>{username}</IonTitle>
                    </IonCol>
                  </IonRow>
                </IonGrid>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding'>
          <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/Login">
                <Login />
              </Route>
              <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/">
                <Redirect to="/Login" />
              </Route>
            </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
          </IonContent>
      </IonApp>
    </QueryClientProvider>
  );
}

export default App;
