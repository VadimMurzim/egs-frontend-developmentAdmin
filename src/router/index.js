import { createRouter, createWebHistory } from 'vue-router';
import Rega from '../components/rega.vue'; 
import main from '../components/main.vue'; 
import raiting from '../components/raiting.vue';
import Admin from '../components/Admin.vue';

const routes = [
  {
    path: '/',
    redirect: '/main' 
  },
  {
    path: '/rega',
    name: 'Rega',
    component: Rega 
  },
  {
    path: '/main',
    name: 'main',
    component: main 
  },
  {
    path: '/raiting',
    name: 'raiting',
    component: raiting 
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
