/* eslint-disable no-param-reassign */

import * as types from './mutation-types';

export default {
  [types.NEW_JWT_TOKEN](state, jwtToken) {
    state.token = jwtToken;
    state.loggedIn = true;
  },
  [types.CLEAR_JWT_TOKEN](state) {
    state.token = null;
    state.loggedIn = false;
    state.access = null;
    state.id = null;
    state.profile = {};
  },
  [types.SET_ACCESS_LEVEL](state, access) {
    state.access = access;
  },
  [types.SET_USER_PROFILE](state, profile) {
    state.profile = profile;
  },

  [types.SET_USER_ID](state, id) {
    state.id = id;
  },
  [types.SET_MY_PROFILE](state, myProfile) {
    state.myProfile = myProfile;
  },
  [types.HIDE_MENU](state) {
    state.menuVisible = false;
  },
  [types.SHOW_MENU](state) {
    state.menuVisible = true;
  },
  [types.NOT_LOGGED_CAUSE](state, cause) {
    state.notLoggedCause = cause;
  },
  [types.IS_LOADING](state) {
    state.busy = true;
  },
  [types.LOADED](state) {
    state.busy = false;
  },
  [types.IS_MOBILE](state, is) {
    state.mobileView = is;
  },
  [types.NEW_EVENT](state, event) {
    state.lastEvent = event;
  },
};
