import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './Home.vue';
import VueDefault from './VueDefault.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/vue-default',
    component: VueDefault,
  }
];

const router = new VueRouter({
  routes
});

export default router;
