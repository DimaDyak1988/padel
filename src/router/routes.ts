import HomePage from '@/pages/HomePage.vue';
import UsersPage from '@/pages/UsersPage.vue';
import CreateUserPage from '@/pages/CreateUserPage.vue';

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
  {
    path: '/users/create',
    name: 'create-user',
    component: CreateUserPage,
  },
];
