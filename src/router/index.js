import Vue from 'vue';
import Router from 'vue-router';
import DashboardView from '@/components/dashboard/DashboardView';
import NotLogged from '@/components/auth/NotLogged';
import About from '@/components/auth/About';
import Token from '@/components/auth/Token';
import ClubsView from '@/components/clubs/View';

import store from '../store';
import games from './games';
import auth from './auth';
import users from './users';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    { path: '/notLogged', component: NotLogged },
    { path: '/about', component: About },
    { path: '/token', component: Token },
    { path: '/dashboard', component: DashboardView, meta: { requiresAuth: true } },
    { path: '/clubs', component: ClubsView, meta: { requiresAuth: true } },
    ...games,
    ...auth,
    ...users,
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // TODO implement isAdmin/isUser checking from isPositive meta field value
    if (!store.getters.isLogged) {
      next({
        path: '/notLogged',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
