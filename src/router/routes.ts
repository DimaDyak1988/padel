import HomePage from '@/pages/HomePage.vue';
import UsersPage from '@/pages/UsersPage.vue';
import CreateUserPage from '@/pages/CreateUserPage.vue';
import UpdateUserPage from '@/pages/UpdateUserPage.vue';

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
  {
    path: '/users/edit/:id',
    name: 'update-user',
    component: UpdateUserPage,
  },
];
