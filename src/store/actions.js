import debounce from 'lodash.debounce';

import * as types from './mutation-types';
import { api } from '../plugins/api';

const refreshProfile = debounce(({ commit, state }) => {
  api(state)('GET', '/users/myprofile').then(profile => commit(types.SET_MY_PROFILE, profile));
}, 250);

const exchangeToken = ({ state, dispatch }) => {
  api(state)('PUT', '/jwt/exchange').then(({ token }) => {
    dispatch('login', token);
  });
};

const decodeToken = ({ commit, state }, token) => {
  const [, payload] = token.split('.');
  const {
    access, meta, id, exp,
  } = JSON.parse(atob(payload));
  const now = Date.now() / 1000;
  if (exp < now) {
    commit(types.NOT_LOGGED_CAUSE, 'Token has expired!');
  } else {
    commit(types.NOT_LOGGED_CAUSE, null);
    commit(types.SET_ACCESS_LEVEL, access);
    commit(types.SET_USER_PROFILE, meta);
    commit(types.NEW_JWT_TOKEN, token);
    commit(types.SET_USER_ID, id);
    refreshProfile({ commit, state });
  }
};

export default {
  refreshProfile,
  exchangeToken,
  decodeToken,
  login({ dispatch }, token) {
    window.localStorage.setItem('TOKEN', token);
    dispatch('decodeToken', token);
  },
  handleEvent({ commit }, event) {
    commit(types.NEW_EVENT, event);
  },
  hideMenu({ commit, state }) {
    if (state.menuVisible && state.mobileView) {
      commit(types.HIDE_MENU);
    }
  },
  isLoading({ commit }) {
    commit(types.IS_LOADING);
  },
  loaded({ commit }) {
    commit(types.LOADED);
  },
  toggleMenu({ commit, state: { menuVisible, mobileView } }) {
    if (!mobileView) {
      return false;
    }
    if (menuVisible) {
      return commit(types.HIDE_MENU);
    }
    return commit(types.SHOW_MENU);
  },
  loadLocalStorage({ dispatch }) {
    const token = window.localStorage.getItem('TOKEN');
    if (token) {
      dispatch('decodeToken', token);
      dispatch('exchangeToken');
    }
  },
  logout({ commit }) {
    window.localStorage.removeItem('TOKEN');
    commit(types.CLEAR_JWT_TOKEN);
  },
  size({ commit }, width) {
    commit(types.IS_MOBILE, width <= 768);
  },
  ...refreshProfile,
};
