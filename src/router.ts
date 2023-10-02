import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/PageHome.vue')
    },
    {
        path: '/modern',
        component: () => import('./layouts/LayoutScreenSwitcher.vue'),
        redirect: '/modern/menu',
        children: [
            {
                path: 'menu',
                component: () => import('./pages/PageModernMenu.vue')
            },
            {
                path: 'loading',
                component: () => import('./pages/PageModernLoading.vue')
            },
            {
                path: 'ingame',
                component: () => import('./pages/PageModernIngame.vue')
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('./layouts/LayoutBasic.vue'),
        children: [
          {
            path: '',
            component: () => import('./pages/PageNotFound.vue')
          },
        ],
    },
  ],
})

export default router