import HomePage from '@/pages/HomePage.vue';
import UsersPage from '@/pages/UsersPage.vue';

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
] as const satisfies StrictRoute[];

export type RouteName = typeof routes[number]['name'];
export type RoutePath = typeof routes[number]['path'];


export default routes
