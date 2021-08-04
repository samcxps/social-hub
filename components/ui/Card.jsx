/* eslint-disable @next/next/no-img-element */
import { IonButton } from '@ionic/react';
import classNames from 'classnames';
import { useState } from 'react';
import { DonateModal } from '../pages/DonateModal';

const Card = ({ children, className, ...props }) => (
  <div {...props} className={classNames('max-w-xl', className)}>
    <div className="relative bg-white shadow-md rounded-b-xl dark:bg-black">{children}</div>
  </div>
);

const InstagramCard = ({ title, type, text, creator, comments, likes, image, href }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="my-6">
      <DonateModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute top-0 right-0 -mt-4 mr-2 z-10">
        <div className="rounded-full leading-none">
          <i className="text-base align-middle"></i>
          <IonButton color="tertiary" size="small" onClick={() => setShowModal(true)}>
            Donate
          </IonButton>
        </div>
      </div>
      <div className="h-32 w-full relative">
        <a href={href} target="_blank" rel="noreferrer">
          <img className="rounded-t-xl h-32 w-full object-cover" src={image} alt="" />
        </a>
      </div>
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
        <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
        <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
        <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400 line-clamp-2">
          {text}
        </p>
        <div className="flex items-center justify-between space-x-4">
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{creator}</h3>
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
            {comments} comments
          </h3>
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
            {likes} likes
          </h3>
        </div>
      </div>
    </Card>
  );
};

const YoutubeCard = ({ title, type, text, creator, comments, views, image, href }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="my-4 mx-auto">
      <DonateModal showModal={showModal} setShowModal={setShowModal} />

      <div className="absolute top-0 right-0 -mt-4 mr-2 z-10">
        <div className="rounded-full leading-none">
          <i className="text-base align-middle"></i>
          <IonButton color="tertiary" size="small" onClick={() => setShowModal(true)}>
            Donate
          </IonButton>
        </div>
      </div>
      <div className="h-32 w-full relative">
        <a href={href} target="_blank" rel="noreferrer">
          <img className="rounded-t-xl h-32 w-full object-cover" src={image} alt="" />
        </a>
      </div>
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
        <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
        <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
        <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400 line-clamp-2">
          {text}
        </p>
        <div className="flex items-center justify-between space-x-4">
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{creator}</h3>
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
            {comments} comments
          </h3>
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
            {views} views
          </h3>
        </div>
      </div>
    </Card>
  );
};

const SpotifyCard = ({ title, type, text, creator, length, image, href }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="my-4 mx-auto">
      <DonateModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute top-0 right-0 -mt-4 mr-2 z-10">
        <div className="rounded-full leading-none">
          <i className="text-base align-middle"></i>
          <IonButton color="tertiary" size="small" onClick={() => setShowModal(true)}>
            Donate
          </IonButton>
        </div>
      </div>
      <div className="h-32 w-full relative">
        <a href={href} target="_blank" rel="noreferrer">
          <img className="rounded-t-xl h-32 w-full object-cover" src={image} alt="" />
        </a>
      </div>
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
        <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
        <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
        <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400 line-clamp-2">
          {text}
        </p>
        <div className="flex items-center justify-between space-x-4">
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{creator}</h3>
          <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
            {length} minutes
          </h3>
        </div>
      </div>
    </Card>
  );
};

export { YoutubeCard, InstagramCard, SpotifyCard };
