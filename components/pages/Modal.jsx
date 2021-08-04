import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonPage,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAlert,
  IonLabel,
  IonTextarea,
  IonItem,
  IonNote,
  IonIcon,
  IonButtons,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

const PrizeDonation = ({ creator, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [text, setText] = useState();

  const clickHandler = value => {
    setValue(value);
    setPurchaseAlert(true);
  };

  return (
    <>
      <IonAlert
        isOpen={purchaseAlert}
        onDidDismiss={() => setPurchaseAlert(false)}
        header="Confirm Donation"
        subHeader={`Send $${value} to ${creator}?`}
        message="We will use the primary payment method on file"
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: () => {
              setShowModal(false);
            },
          },
        ]}
      />
      <div className="flex flex-col pt-12 mx-8 space-y-4">
        <div className="sm:col-span-6">
          <IonLabel>Message</IonLabel>
          <div className="mt-1">
            <IonItem>
              <IonTextarea color="light" value={text} onIonChange={e => setText(e.detail.value)} />
            </IonItem>
          </div>
          <div className="mt-1">
            <IonNote>Send {creator} a message!</IonNote>
          </div>
        </div>

        <div>
          <div className="mx-2">
            <IonButton color="primary" expand="block" onClick={() => clickHandler(1)}>
              $1
            </IonButton>
          </div>
          <IonButton color="success" expand="block" size="large" onClick={() => clickHandler(5)}>
            $5
          </IonButton>
          <div className="mx-2">
            <IonButton color="primary" expand="block" onClick={() => clickHandler(10)}>
              $10
            </IonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export const DonationModal = ({ creator, showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon slot="start" icon={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle slot="end">Donate to {creator}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <PrizeDonation creator={creator} setShowModal={setShowModal} />
        </IonContent>
      </IonPage>
    </IonModal>
  );
};
