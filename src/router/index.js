import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Inspection from '@/components/Page-Two.vue'
import PageOne from '@/components/Page-One.vue'
import PageThree from '@/components/Page-Three.vue'
import CounterButton from '@/components/Counter-Button.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Page-Two',
      name: 'Inspection',
      component: Inspection,
    },
    {
      path: '/Page-One',
      name: 'testPage',
      component: PageOne,
    },
    {
      path: '/Page-Three',
      name: 'pageThree',
      component: PageThree,
    },
    {
      path: '/Counter-Button',
      name: 'counterButton',
      component: CounterButton,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
