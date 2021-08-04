import { createSelector } from 'reselect';

const getState = state => state;

export const getFeedItems = createSelector(getState, state => state.feedItems);
export const getNotifications = createSelector(getState, state => state.notifications);
export const getSettings = createSelector(getState, state => state.settings);
