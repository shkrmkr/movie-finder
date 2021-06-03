import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ActorDetails from '../views/ActorDetails.vue';
import Actors from '../views/Actors.vue';
import Home from '../views/Home.vue';
import MovieDetails from '../views/MovieDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
  },
  {
    path: '/actors',
    name: 'Actors',
    component: Actors,
  },
  {
    path: '/actors/:id',
    name: 'ActorDetails',
    component: ActorDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
