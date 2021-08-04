import { Store as PullStateStore } from 'pullstate';

import { feedItems, notifications } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  feedItems,
  notifications,
  settings: {
    enableNotifications: true,
  },
});

export default Store;
