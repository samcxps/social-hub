/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

const PrizeDonation = ({ creator, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [message, setMessage] = useState();
  const [customAmount, setCustomAmount] = useState();

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
        message="We will use the primary payment method on file and you will be entered in a raffle to win a cool shirt!"
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
      <div className="px-8 pt-6 text-center">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Enter to win an exclusive {creator} shirt!</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <img src="/assets/shirt.jpeg" alt="Cool Shirt" />
          </IonCardContent>
        </IonCard>
      </div>

      <div className="flex flex-col pt-12 mx-8 space-y-4">
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

          <div className="mt-8">
            <div className="pl-5 mt-1">
              <IonNote slot="end">Or donate a custom amount!</IonNote>
            </div>
            <IonItem>
              <IonInput
                value={customAmount}
                type="number"
                placeholder="Enter Input"
                onIonChange={e => setCustomAmount(e.detail.value)}
              ></IonInput>
              <IonButton color="primary" expand="block" onClick={() => clickHandler(customAmount)}>
                Donate
              </IonButton>
            </IonItem>
          </div>
        </div>
      </div>
    </>
  );
};

const BattleDonation = ({ creator, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [customAmount, setCustomAmount] = useState();
  const [selectedCard, setSelectedCard] = useState(-1);

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

      <div className="flex flex-row justify-center space-x-8 pt-6">
        <IonCard button onClick={() => setSelectedCard(1)}>
          <div className={selectedCard === 1 && 'border-2 overflow-auto border-blue-500'}>
            <div className="p-8">
              <div className="flex flex-col text-center">
                <IonLabel>Creator 1</IonLabel>
                <img
                  src="https://joeschmoe.io/api/v1/taeha"
                  alt="Creator 1"
                  className="h-24 w-24"
                />
              </div>
            </div>
          </div>
        </IonCard>

        <IonCard button onClick={() => setSelectedCard(2)}>
          <div className={selectedCard === 2 && 'border-2 overflow-auto border-blue-500'}>
            <div className="p-8">
              <div className="flex flex-col text-center">
                <IonLabel>Creator 2</IonLabel>
                <img src="https://joeschmoe.io/api/v1/dms" alt="Creator 2" className="h-24 w-24" />
              </div>
            </div>
          </div>
        </IonCard>
      </div>
    </>
  );
};

const MessageDonation = ({ creator, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [message, setMessage] = useState();
  const [customAmount, setCustomAmount] = useState();

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
        <IonLabel>Message</IonLabel>
        <div className="mt-1">
          <IonItem>
            <IonTextarea
              class="themed-textarea"
              color="light"
              value={message}
              onIonChange={e => setMessage(e.detail.value)}
            />
          </IonItem>
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

          <div className="mt-8">
            <div className="pl-5 mt-1">
              <IonNote slot="end">Or donate a custom amount!</IonNote>
            </div>
            <IonItem>
              <IonInput
                value={customAmount}
                type="number"
                placeholder="Enter Input"
                onIonChange={e => setCustomAmount(e.detail.value)}
              ></IonInput>
              <IonButton color="primary" expand="block" onClick={() => clickHandler(customAmount)}>
                Donate
              </IonButton>
            </IonItem>
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
          <BattleDonation creator={creator} setShowModal={setShowModal} />
        </IonContent>
      </IonPage>
    </IonModal>
  );
};
