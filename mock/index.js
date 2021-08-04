import Ivun1 from './assets/ivun-1.jpeg';
import IvunYT1 from './assets/ivun-yt-1.jpg';

import Dms1 from './assets/dms-1.jpeg';
import DmsYT1 from './assets/dms-yt-1.jpg';

import Taeha1 from './assets/taeha-1.jpeg';
import TaehaYT1 from './assets/taeha-yt-1.jpg';

import Morbid1 from './assets/morbid-1.jpeg';
import MorbidSpotify1 from './assets/morbid-spot-1.jpeg';

const shuffleIt = array => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const ivunItems = [
  {
    type: 'instagram',
    text: 'Sometimes I\u2019ll ask',
    creator: 'ivun.street',
    image: Ivun1,
    href: 'https://instagram.com/ivun.street',
    comments: 42,
    likes: 213,
  },
  {
    type: 'youtube',
    text: '28mm',
    creator: 'Ivan Chow',
    image: IvunYT1,
    href: 'https://www.youtube.com/watch?v=_ULrRSr5ViQ',
    comments: 187,
    views: 13350,
  },
];

const dmsItems = [
  {
    type: 'instagram',
    text: '\ud83e\udeb4 \ud83c\udfa7 \ud83c\udfa5',
    creator: 'dms3tv',
    image: '/img/ivun-1.jpeg',
    href: 'https://instagram.com/dms3tv',
    comments: 5,
    likes: 163,
  },
  {
    type: 'youtube',
    text: 'Nothing Ear(1) - Sound test & Unboxing!!!',
    creator: 'DMS',
    image: DmsYT1,
    href: 'https://www.youtube.com/watch?v=--UN_ot4Zfc',
    comments: 147,
    views: 11824,
  },
];

const taehaItems = [
  {
    type: 'instagram',
    text:
      'Typing test of the @modekeyboards SixtyFive is now live on my YouTube channel! Featuring a back accent piece that is interchangeable via magnets, configure yours today by joining the preorder! #sponsored',
    creator: 'taehatypes',
    image: Taeha1,
    href: 'https://instagram.com/taehatypes',
    comments: 6,
    likes: 3265,
  },
  {
    type: 'youtube',
    text: 'GMMK Pro Review: A New Era for Mechanical Keyboards?',
    creator: 'Taeha Types',
    image: TaehaYT1,
    href: 'https://www.youtube.com/watch?v=hS4czKl7WpQ',
    comments: 1732,
    views: 853174,
  },
];

const morbidItems = [
  {
    type: 'instagram',
    text: 'Episode 251: Tara Calico\n1. Tara Calico \n2. The Polaroid associated with the case',
    creator: 'morbidpodcast',
    image: Morbid1,
    href: 'https://instagram.com/morbidpodcast',
    comments: 330,
    likes: 16135,
  },
  {
    type: 'spotify',
    text: 'Listener Tales 31',
    creator: 'Morbid: A True Crime Podcast',
    image: MorbidSpotify1,
    href: 'https://open.spotify.com/show/1cpyLfDHP1cNnyOb478qrt',
    length: 62,
  },
];

const feedUnshuffled = [...ivunItems, ...dmsItems, ...taehaItems, ...morbidItems];
export const feedItems = shuffleIt(feedUnshuffled);

export const notifications = [
  { title: 'New content from DMS', when: '6 hr' },
  { title: 'New content from Taeha Types', when: '5 days' },
  { title: 'New payment method added', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '2 weeks' },
];

// Some fake lists
export const lists = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];
