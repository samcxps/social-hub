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
    modal: 'ivun',
    text: 'Sometimes I\u2019ll ask',
    creator: 'ivun.street',
    image: '/assets/ivun-1.jpeg',
    href: 'https://instagram.com/ivun.street',
    comments: 42,
    likes: 213,
  },
  {
    type: 'youtube',
    modal: 'ivun',
    text: '28mm',
    creator: 'Ivan Chow',
    image: '/assets/ivun-yt-1.jpg',
    href: 'https://www.youtube.com/watch?v=_ULrRSr5ViQ',
    comments: 187,
    views: '13.3k',
  },
];
const dmsItems = [
  {
    type: 'instagram',
    modal: 'dms',
    text: '\ud83e\udeb4 \ud83c\udfa7 \ud83c\udfa5',
    creator: 'dms3tv',
    image: '/assets/dms-1.jpeg',
    href: 'https://instagram.com/dms3tv',
    comments: 5,
    likes: 163,
  },
  {
    type: 'youtube',
    modal: 'dms',
    text: 'Nothing Ear(1) - Sound test & Unboxing!!!',
    creator: 'DMS',
    image: '/assets/dms-yt-1.jpg',
    href: 'https://www.youtube.com/watch?v=--UN_ot4Zfc',
    comments: 147,
    views: '11.8k',
  },
];
const taehaItems = [
  {
    type: 'instagram',
    modal: 'taeha',
    text:
      'Typing test of the @modekeyboards SixtyFive is now live on my YouTube channel! Featuring a back accent piece that is interchangeable via magnets, configure yours today by joining the preorder! #sponsored',
    creator: 'taehatypes',
    image: '/assets/taeha-1.jpeg',
    href: 'https://instagram.com/taehatypes',
    comments: 6,
    likes: 3265,
  },
  {
    type: 'youtube',
    modal: 'taeha',
    text: 'GMMK Pro Review: A New Era for Mechanical Keyboards?',
    creator: 'Taeha Types',
    image: '/assets/taeha-yt-1.jpg',
    href: 'https://www.youtube.com/watch?v=hS4czKl7WpQ',
    comments: 1732,
    views: '853k',
  },
];
const morbidItems = [
  {
    type: 'instagram',
    modal: 'morbid',
    text: 'Episode 251: Tara Calico\n1. Tara Calico \n2. The Polaroid associated with the case',
    creator: 'morbidpodcast',
    image: '/assets/morbid-1.jpeg',
    href: 'https://instagram.com/morbidpodcast',
    comments: 330,
    likes: '16.1k',
  },
  {
    type: 'spotify',
    modal: 'morbid',
    text: 'Listener Tales 31',
    creator: 'Morbid: A True Crime Podcast',
    image: '/assets/morbid-spot-1.jpeg',
    href: 'https://open.spotify.com/show/1cpyLfDHP1cNnyOb478qrt',
    length: 62,
  },
];

export const feedItems = shuffleIt([...ivunItems, ...dmsItems, ...taehaItems, ...morbidItems]);

export const notifications = [
  { title: 'New content from DMS', when: '6 hr' },
  { title: 'New content from Taeha Types', when: '5 days' },
  { title: 'New payment method added', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '2 weeks' },
];
