import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonPage,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

export const IvunModal = ({ showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Donate to Ivan Chow</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>hi</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonPage>
    </IonModal>
  );
};

export const TaehaModal = ({ showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Donate to Taeha Types</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <h1>hi</h1>
        </IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonPage>
    </IonModal>
  );
};

export const DMSModal = ({ showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Donate to DMS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>hi</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonPage>
    </IonModal>
  );
};

export const MorbidModal = ({ showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Donate to Morbid Podcast</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>hi</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonPage>
    </IonModal>
  );
};
