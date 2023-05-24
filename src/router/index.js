
import { createWebHistory, createRouter } from 'vue-router'
import LoginView from "../pages/LoginView.vue";
import MainView from "../pages/MainView.vue";
import DetailView from "../pages/DetailView.vue";
import CourseView from "../pages/CourseView.vue";
import RplView from "../pages/RplView.vue";
import IntroductView from "../pages/IntroductView.vue";
import IndexView from "../IndexView.vue";

const routes = [
  {
    path: '/',
    name: 'EmptyLayout',
    component: () => import('../pages/layout/EmptyLayout.vue'),
    children: [
      {
        path: '/',
        name: 'IndexView',
        component: IndexView,
      },
      {
        path: '/login',
        name: 'LoginView',
        component: LoginView,
      },
    ],
  },
  {
    path: '/',
    name: 'DefaultLayout',
    component: () => import('../pages/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/main',
        name: 'MainView',
        component: MainView,
      },
      {
        path: '/detail',
        name: 'DetailView',
        component: DetailView,
      },
      {
        path: '/courseView',
        name: 'CourseView',
        component: CourseView,
      },
      {
        path: '/introductView',
        name: 'IntroductView',
        component: IntroductView,
      },
      {
        path: '/rplView',
        name: 'RplView',
        component: RplView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router