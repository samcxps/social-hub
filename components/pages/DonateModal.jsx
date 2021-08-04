import { useState } from 'react';
import { IonButton, IonContent, IonPage, IonModal } from '@ionic/react';

export const DonateModal = ({ showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <p>This is modal content</p>
      <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
    </IonModal>
  );
};
