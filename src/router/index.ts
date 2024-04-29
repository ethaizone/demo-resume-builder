import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/components/layouts/LayoutMain.vue'
import PageHome from '@/pages/PageHome.vue'
import LayoutPrint from '@/components/layouts/LayoutPrint.vue'
import PagePrintPreview from '@/pages/PagePrintPreview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutMain,
      children: [
        {
          path: '',
          component: PageHome
        }
      ]
    },
    {
      path: '/print/',
      component: LayoutPrint,
      children: [
        {
          path: 'preview',
          component: PagePrintPreview
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
