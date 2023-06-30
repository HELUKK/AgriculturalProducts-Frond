import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/",
      meta:{title:"登录"},
      redirect:"/login"
    },
    {
      name:"login",
      path:"/login",
      component: () => import ("@/views/LoginView.vue")
    }
  ]
})

export default router
