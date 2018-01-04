// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import App from './App';
import store from './store/index';
import router from './router';
import Api from './plugins/api';
import Ws from './plugins/ws';

/* Initialize the plugin */
Vue.use(Buefy, {
  defaultIconPack: 'fa',
});
Vue.config.productionTip = false;

Vue.use(Api);
Vue.use(Ws);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
