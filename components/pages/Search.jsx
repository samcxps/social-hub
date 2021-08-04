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
  const [recentSearches, setRecentSearches] = useState([
    'dms',
    'taeha types',
    'ivun.street',
    'morbid podcast',
  ]);

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
          <IonListHeader>
            <IonText color="primary">Recent Searches</IonText>
          </IonListHeader>
          {recentSearches.map(search => (
            <IonItem key={`search-${search}`}>
              <IonLabel>{search}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
