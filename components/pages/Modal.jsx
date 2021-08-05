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
  IonText,
  IonRouterLink,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

const RaffleDonation = ({ creator, showModal, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [message, setMessage] = useState();
  const [customAmount, setCustomAmount] = useState();

  const clickHandler = value => {
    setValue(value);
    setPurchaseAlert(true);
  };

  return (
    <IonModal isOpen={showModal} animated={false}>
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
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon slot="start" size="large" icon={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle slot="end">Donate to {creator}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
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
              <IonButton
                color="success"
                expand="block"
                size="large"
                onClick={() => clickHandler(5)}
              >
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
                  <IonButton
                    color="primary"
                    expand="block"
                    onClick={() => clickHandler(customAmount)}
                  >
                    Donate
                  </IonButton>
                </IonItem>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};

const BattleDonation = ({ creator, showModal, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [customAmount, setCustomAmount] = useState();
  const [selectedCard, setSelectedCard] = useState(-1);

  const clickHandler = value => {
    setValue(value);
    setPurchaseAlert(true);
  };
  return (
    <IonModal isOpen={showModal} animated={false}>
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
              console.log('confirm');
            },
          },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon slot="start" size="large" icon={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle slot="end">Donate to {creator}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="flex flex-col">
            <div className="flex justify-center space-x-32 pt-6">
              <span>40%</span>
              <span>60%</span>
            </div>

            <div className="flex flex-row items-center justify-center pt-2 items-center pl-4">
              <div className="bg-red-500 w-44 h-6 rounded-l-full" />
              <div className="bg-blue-500 w-56 h-6 rounded-r-full" />
            </div>
          </div>

          <div className="flex flex-row justify-center space-x-8">
            <IonCard button onClick={() => setSelectedCard(1)}>
              <div className={selectedCard === 1 && 'border-2 overflow-auto border-blue-500'}>
                <div className="p-8">
                  <div className="flex flex-col text-center">
                    <IonLabel>Ivan Chow</IonLabel>
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
                    <IonLabel>Dms</IonLabel>
                    <img
                      src="https://joeschmoe.io/api/v1/dms"
                      alt="Creator 2"
                      className="h-24 w-24"
                    />
                  </div>
                </div>
              </div>
            </IonCard>
          </div>
          <div className="flex flex-col pt-12 mx-8 space-y-4">
            <div>
              <div className="mx-2">
                <IonButton color="primary" expand="block" onClick={() => clickHandler(1)}>
                  $1
                </IonButton>
              </div>
              <IonButton
                color="success"
                expand="block"
                size="large"
                onClick={() => clickHandler(5)}
              >
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
                  <IonButton
                    color="primary"
                    expand="block"
                    onClick={() => clickHandler(customAmount)}
                  >
                    Donate
                  </IonButton>
                </IonItem>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};

const MessageDonation = ({ creator, showModal, setShowModal }) => {
  const [purchaseAlert, setPurchaseAlert] = useState(false);
  const [value, setValue] = useState(-1);
  const [message, setMessage] = useState();
  const [customAmount, setCustomAmount] = useState();

  const clickHandler = value => {
    setValue(value);
    setPurchaseAlert(true);
  };

  return (
    <IonModal isOpen={showModal} animated={false}>
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
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon slot="start" size="large" icon={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle slot="end">Donate to {creator}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
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
              <IonButton
                color="success"
                expand="block"
                size="large"
                onClick={() => clickHandler(5)}
              >
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
                  <IonButton
                    color="primary"
                    expand="block"
                    onClick={() => clickHandler(customAmount)}
                  >
                    Donate
                  </IonButton>
                </IonItem>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};

export const DonationModal = ({ creator, showModal, setShowModal }) => {
  const [showBattleDonation, setShowBattleDonation] = useState(false);
  const [showMessageDonation, setShowMessageDonation] = useState(false);
  const [showRaffleDonation, setShowRaffleDonation] = useState(false);

  return (
    <IonModal isOpen={showModal}>
      <BattleDonation
        creator={creator}
        showModal={showBattleDonation}
        setShowModal={setShowBattleDonation}
      />
      <MessageDonation
        creator={creator}
        showModal={showMessageDonation}
        setShowModal={setShowMessageDonation}
      />
      <RaffleDonation
        creator={creator}
        showModal={showRaffleDonation}
        setShowModal={setShowRaffleDonation}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon slot="start" size="large" icon={closeOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle slot="end">Donate to {creator}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="flex flex-col justify-center pt-4">
            <IonCard button onClick={() => setShowBattleDonation(true)}>
              <div className="p-4">
                <div className="flex flex-row items-center space-x-12">
                  <img src="/assets/battle.png" alt="Creator 2" className="h-24 w-24" />
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-lg font-bold text-blue-500">Battle Donation</h1>
                    <IonText>Choose which creator to donate for in a donation face-off!</IonText>
                  </div>
                </div>
              </div>
            </IonCard>

            <IonCard button onClick={() => setShowMessageDonation(true)}>
              <div className="p-4">
                <div className="flex flex-row items-center space-x-12">
                  <img src="/assets/message.png" alt="Creator 2" className="h-24 w-24" />
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-lg font-bold text-blue-500">Message Donation</h1>
                    <IonText>
                      Donate to your favorite creator and give them a customized message!
                    </IonText>
                  </div>
                </div>
              </div>
            </IonCard>

            <IonCard button onClick={() => setShowRaffleDonation(true)}>
              <div className="p-4">
                <div className="flex flex-row items-center space-x-12">
                  <img src="/assets/raffle.png" alt="Creator 2" className="h-24 w-24" />
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-lg font-bold text-blue-500">Raffle Donation</h1>
                    <IonText>
                      Donate to your favorite creator and get entered in a raffle to win a prize of
                      the creator&apos;s choice!
                    </IonText>
                  </div>
                </div>
              </div>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};
