/* eslint-disable @next/next/no-img-element */
import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
  IonButton,
  IonText,
} from '@ionic/react';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cool Guy Johnson</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-4">
          <div className="flex items-center justify-center">
            <img
              className="rounded-full h-24 w-24"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div className="px-10 pt-5">
            <div className="flex flex-col items-center space-y-1">
              <IonText color="primary">4 Following</IonText>
              <IonText color="primary">6 Donations</IonText>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
