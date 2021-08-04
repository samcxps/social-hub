import { Store as PullStateStore } from 'pullstate';

import { lists, feedItems, notifications } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  feedItems,
  lists,
  notifications,
  settings: {
    enableNotifications: true,
  },
});

export default Store;
