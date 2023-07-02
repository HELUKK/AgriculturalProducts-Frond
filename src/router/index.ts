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
          name:"goshop",
          path:"/goshop",
          component:() => import("@/views/GoshopView.vue")
        },
        {
          name:"hello",
          path:"/hello",
          component:() => import("@/components/HelloView.vue")
        },
        { path:"",
         meta:{title:"hello"},
         redirect:"/hello"
        }
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
