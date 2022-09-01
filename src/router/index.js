import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/user/:id',
        name: 'user',
        component: () => import('../views/User.vue'),
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/Article.vue')
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('../views/Edit.vue')
      },
      {
        path: '/subscribe/all',
        name: 'all',
        component: () => import('../views/subscribe/All.vue')
      },
      {
        path: '/subscribe/subscribed',
        name: 'subscribed',
        component: () => import('../views/subscribe/Subscribed.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
