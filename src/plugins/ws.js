/* eslint-disable no-param-reassign */
import * as R from 'ramda';

const {
  API_URL,
} = process.env;

export const socket = (vm) => {
  const {
    token,
  } = vm.$store.getters;
  const url = API_URL.replace('http', 'ws');
  const ws = new WebSocket(`${url}/events/ws?raw`, token);
  return ws;
};

export default {
  install(Vue) {
    let handler;
    let usedVm;
    let old;
    let handleClose;
    let retry = 0;
    const handleMessage = (e) => {
      const getPayload = R.pipe(R.prop('data'), JSON.parse);
      usedVm.$store.dispatch('handleEvent', getPayload(e));
    };

    const switchHandlers = () => {
      retry = 0;
      if (old) {
        old.removeEventListener('open', switchHandlers, false);
        old.removeEventListener('message', handleMessage, false);
        old.removeEventListener('close', handleClose, false);
        old.close();
      }
      handler.addEventListener('message', handleMessage, false);
    };

    handleClose = () => {
      retry += 1;
      if (handler) {
        old = handler;
      }
      setTimeout(() => {
        handler = socket(usedVm);
        handler.addEventListener('open', switchHandlers, false);
        handler.addEventListener('close', handleClose, false);
      }, retry > 10 ? 10000 : parseInt(1.5 ** retry, 10) * 125);
    };
    Vue.prototype.$ws = (vm) => {
      if (handler) {
        old = handler;
      }
      usedVm = vm;
      const {
        token,
      } = vm.$store.getters;
      if (!token) {
        return;
      }
      handler = socket(usedVm);
      handler.addEventListener('open', switchHandlers, false);
      handler.addEventListener('close', handleClose, false);
    };
  },
};
