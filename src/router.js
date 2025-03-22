import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;