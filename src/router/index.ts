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
    },
    {
      name:"home",
      path:"/home",
      component:() => import("@/views/HomeView.vue"),
      children:[
        {
          name:"index",
          path:"/index",
          component:() => import("@/views/GoshopView.vue")
        },
        {
          name:"goshop",
          path:"/goshop",
          component:() => import("@/views/GoshopView.vue")
        },
        {
          name:"goshop",
          path:"/goshop",
          component:() => import("@/views/GoshopView.vue")
        },
        {
          name:"goshop",
          path:"/goshop",
          component:() => import("@/views/GoshopView.vue")
        },
        
        {
          name:"goshop",
          path:"/goshop",
          component:() => import("@/views/GoshopView.vue")
        },
      ]
    }
  ]
})

export default router
