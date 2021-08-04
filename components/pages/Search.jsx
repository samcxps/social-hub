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

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([
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
  ]);

  const onSearchbarChange = e => {
    const query = e.detail.value.toLowerCase();

    recentSearches.forEach(item => {
      const shouldShow = item.value.toLowerCase().indexOf(query) > -1;
    });
  };

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
          onIonChange={e => onSearchbarChange(e)}
          cancelButtonIcon={false}
        ></IonSearchbar>
        <IonList>
          <IonListHeader>
            <IonText color="primary">Recent Searches</IonText>
          </IonListHeader>
          {recentSearches.map(item => (
            <IonItem key={`search-${item.value}`}>
              <IonLabel>{item.value}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
