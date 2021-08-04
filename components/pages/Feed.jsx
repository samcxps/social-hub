import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getFeedItems } from '../../store/selectors';
import Store from '../../store';

import { InstagramCard, YoutubeCard, SpotifyCard } from '../ui/Card';

const Feed = () => {
  const feedItems = Store.useState(getFeedItems);
  const [showNotifications, setShowNotifications] = useState(false);

  const getCard = ({ i, index }) => {
    const cards = {
      instagram: <InstagramCard {...i} key={index} />,
      youtube: <YoutubeCard {...i} key={index} />,
      spotify: <SpotifyCard {...i} key={index} />,
    };

    return cards[i.type];
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {feedItems.map((i, index) => getCard({ i, index }))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
