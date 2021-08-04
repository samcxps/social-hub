/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonText,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

const Settings = () => {
  const [paymentMethod, setPaymentMethod] = useState('Chris Visa');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>cool-guy-johnson-11</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-6">
          <div className="flex items-center justify-center">
            <img
              className="rounded-full h-28 w-28"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div className="px-10 pt-5 space-y-4">
            <div className="flex flex-col items-center space-y-1">
              <IonText color="primary">4 Following</IonText>
              <IonText color="primary">6 Donations</IonText>
            </div>
            <div>
              <IonItem />
              <IonItem>
                <IonLabel position="stacked">Name</IonLabel>
                <IonInput type="text" value="Chris Johnson" readonly />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">E-Mail</IonLabel>
                <IonInput type="email" value="chrisj11@northwesternmutual.com" readonly />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Phone Number</IonLabel>
                <IonInput type="text" value="+1-414-123-4567" readonly />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Payment Method</IonLabel>
                <IonSelect
                  selectedText={paymentMethod}
                  placeholder="Select One"
                  onIonChange={e => setPaymentMethod(e.detail.value)}
                >
                  <IonSelectOption value="Chris Visa">Chris Visa</IonSelectOption>
                  <IonSelectOption value="Chris Paypal">Chris Paypal</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
