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

const baseSearches = [
  {
    shouldShow: true,
    value: 'dms',
  },
  {
    shouldShow: true,
    value: 'taeha types',
  },
  {
    shouldShow: true,
    value: 'ivun.street',
  },
  {
    shouldShow: true,
    value: 'morbid podcast',
  },
];

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
          onIonChange={e => setSearchText(e.target.value)}
          cancelButtonIcon={false}
        ></IonSearchbar>
        <IonList>
          <IonListHeader>
            <IonText color="primary">Recent Searches</IonText>
          </IonListHeader>
          {baseSearches.map(
            item =>
              item.shouldShow && (
                <IonItem key={`search-${item.value}`}>
                  <IonLabel>{item.value}</IonLabel>
                </IonItem>
              )
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
