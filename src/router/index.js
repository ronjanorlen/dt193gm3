import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogListView from "../views/DogListView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //routing till startsida
      path: '/',
      name: 'start',
      component: HomeView,
    },
    {
      // routing till undersida för lista med hundar
      path: '/my-dogs',
      name: 'my dogs',
      component: DogListView
    },
    {
      // routing till undersida om-sida
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
