import HomePage from '@/pages/HomePage.vue';
import { UsersPage } from '@/pages/UsersPage';

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/users',
    name: 'users',
    component: UsersPage,
  },
];
