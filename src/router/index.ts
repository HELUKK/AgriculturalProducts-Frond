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
          name:"aboutUs",//关于我们
          path:"/aboutUs",
          component:() => import("@/views/AboutUs.vue")
        },
        {
          name:"handleUp",//修改我的商品
          path:"/handleUp",
          component:() => import("@/components/UpdateView.vue")
        },
        {
          name:"handlePG",//发布商品
          path:"/handlePG",
          component:() => import("@/components/PublishMessage.vue")
        },
        {
         
          name:"mypublicG",//我的商品
          path:"mypublicG",
          component:() => import("@/views/PublishedMessage.vue"),
          meta:{type:"商品" as string}
        },
        {
          name:"handlea",//预约
          path:"handlea",
          component:() => import("@/views/AppointView.vue")
        },
        {
          name:"handleq",//提问
          path:"handleq",
          component:() => import("@/views/QuestionView.vue")
        },
        {
          name:"quesd",//问答详情
          path:"quesd",
          component:() => import("@/components/QuesView.vue")
        },
        {
          name:"detail",
          path:"/detail",
          component:() => import("@/views/DetailView.vue")
        },
        {
          name:"requestsdetail",
          path:"/requestsdetail",
          component:() => import("@/views/RequestsDetailView.vue")
        },
        {
          name:"kdetail",
          path:"/kdetail",
          component:() => import("@/views/KdetailView.vue")
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
          name:"goshop",
          path:"shoppingcart",
          component:() => import("@/views/HomeView/ShoppingCartView.vue")
        },
        {
          name:"guidence",
          path:"guidance",
          component:() => import("@/views/GuidanceView.vue")
        },
        {
          name:"UserDetial",
          path:"UserDetial",
          component:() => import("@/views/HomeView/UserDetialView.vue")
        },
        {
          name:"MyQuestion",
          path:"MyQuestion",
          component:() => import("@/views/MyQuestionView.vue")
        },
        {
          name:"myappointmennt",
          path:"MyAppointmennt",
          component:() => import("@/views/MyAppointment.vue")
        },
        {
          name:"RePassword",
          path:"RePassword",
          component:() => import("@/views/RePassword.vue")
        }
      ]
    },
    {
      name:"UserManage",
      path:"/UserManage",
      component: () => import ("@/views/HomeView/UserManageView.vue")
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
