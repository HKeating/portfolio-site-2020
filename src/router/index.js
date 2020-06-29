import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/btab',
    name: 'BTAB',
    component: () => import(/* webpackChunkName: "btab" */ '../views/BTAB.vue'),
  },
  {
    path: '/general-assembly',
    name: 'GA',
    component: () => import(/* webpackChunkName: "ga" */ '../views/GA.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
