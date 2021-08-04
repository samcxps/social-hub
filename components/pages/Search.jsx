import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonItem,
  IonText,
  IonList,
  IonLabel,
  IonListHeader,
} from '@ionic/react';
import Notifications from './Notifications';
import { notificationsOutline } from 'ionicons/icons';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value)}
        ></IonSearchbar>
        <IonList>
          <IonListHeader>Recent Searches</IonListHeader>
          <IonItem>
            <IonLabel>dms</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>taeha types</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>ivun.street</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>morbid podcast</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
