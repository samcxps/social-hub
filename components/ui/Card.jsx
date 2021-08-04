/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

import classNames from 'classnames';
import { IonButton, IonContent, IonModal } from '@ionic/react';
import { useState } from 'react';
import { settingsSharp } from 'ionicons/icons';
import { DonateModal } from '../pages/DonateModal';


const Card = ({ children, className, ...props }) => (
  <div {...props} className={classNames('max-w-xl', className)}>
    <div className="relative bg-white shadow-md rounded-b-xl dark:bg-black">{children}</div>
  </div>
);

const InstagramCard = ({ title, type, text, creator, comments, likes, image, href }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="my-4 mx-auto">
      <DonateModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute top-0 right-0 -mt-2 mr-2 z-10">
        <div className="rounded-full bg-instagram text-white text-xs py-1 pl-2 pr-3 leading-none">
          <i className="text-base align-middle"></i>
          <button className="align-middle" onClick={() => setShowModal(true)}>Donate</button>
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
  )
  
};



const YoutubeCard = ({ title, type, text, creator, comments, views, image, href }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="my-4 mx-auto">
      <DonateModal showModal={showModal} setShowModal={setShowModal} />

      <div className="absolute top-0 right-0 -mt-2 mr-2 z-10">
        <div className="rounded-full bg-youtube text-white text-xs py-1 pl-2 pr-3 leading-none">
          <i className="text-base align-middle"></i>
          <button className="align-middle" onClick={() => setShowModal(true)}>Donate</button>
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
  )
};

const SpotifyCard = ({ title, type, text, creator, length, image, href }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="my-4 mx-auto">
      <DonateModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute top-0 right-0 -mt-2 mr-2 z-10">
        <div className="rounded-full bg-spotify text-white text-xs py-1 pl-2 pr-3 leading-none">
          <i className="text-base align-middle"></i>
          <button className="align-middle" onClick={() => setShowModal(true)}>Donate</button>
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
  )
};

export { YoutubeCard, InstagramCard, SpotifyCard };
