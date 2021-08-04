import React, { useState } from 'react';
import { IonRouterOutlet, IonButton, IonContent, IonPage, IonModal } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';

export const DonateModal = ({showModal, setShowModal}) => {

  return (
    <IonModal isOpen={showModal}>
      <p>This is modal content</p>
      <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
    </IonModal>
  );
};