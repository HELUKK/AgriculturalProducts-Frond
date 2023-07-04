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
      redirect:'/home/index',
      children:[
        {
          name:"detail",
          path:"/detail",
          component:() => import("@/views/DetailView.vue")
        },
        {
          name:"index",
          path:"index",
          component:() => import("@/views/HomepageView.vue")
        },
        {
          name:"source",
          path:"source",
          component:() => import("@/views/NeedsView.vue")
        },
        {
          name:"request",
          path:"request",
          component:() => import("@/views/HomeView/PurchaserequestView.vue")
        },
        {
          name:"knowledge",
          path:"knowledge",
          component:() => import("@/views/KnowledgeView.vue")
        },
        
        {
          name:"guidence",
          path:"guidance",
          component:() => import("@/views/HomeView/GuidanceView.vue")
        },
        {
          name:"goshop",
          path:"shoppingcart",
          component:() => import("@/views/HomeView/ShoppingCartView.vue")
        },
        {
          name:"guidence",
          path:"guidance",
          component:() => import("@/views/HomeView/GuidanceView.vue")
        },
        {
          name:"financing",
          path:"financing",
          component:() => import("@/views/HomeView/Financing/FinancingView1.vue")
        },
      ]
    }
  ]
})
//守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    const token = window.sessionStorage.getItem("token")
    if (!token) {
      next()
      return;
    } else{
      next('home');
    }
    next()
  }
  else{
    const token = window.sessionStorage.getItem("token")
    if (!token) {
      next('/login')
      return;
    } else{
      // 放行
      next();
    }
  }
})
export default router
