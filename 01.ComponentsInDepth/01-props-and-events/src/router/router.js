import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/screen/HomeScreen';
import TodoScreen from '@/screen/TodoScreen';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
