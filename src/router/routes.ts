export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/pages/UsersPage.vue'),
  },
  {
    path: '/users/create',
    name: 'create-user',
    component: () => import('@/pages/CreateUserPage.vue'),
  },
  {
    path: '/users/edit/:id',
    name: 'update-user',
    component: () => import('@/pages/UpdateUserPage.vue'),
  },
];
