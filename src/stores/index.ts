import { defineStore } from 'pinia'
import axios from '@/axios';
import type { Know,ResultVO, User,Good,Question } from '@/dataource/Types';
import router from '@/router';
import {open} from  '@/components/MessageView.vue'

export  const useStore = defineStore('useStore', {
    state: () => ({
        user: {} as User ,//用户信息
        message: '' as string,//后端返回信息    
        exception: '' as string,//异常信息
        page:1,//分页查询
        users:[] as User[],//用户列表
        goods:[] as Good[],//商品列表
        sgoods:[] as Good[],//货源list
        gtotal:0 as number,//商品总条数
        ktotal:0 as number,//知识条数
        stotal:0 as number,//货源条数
        token:'',//token
        flag:false,//是否登录
        flag2:"",//detail页面识别标识
        knows:[] as Know[],
        detailid:0 ,//detail识别id
        questions:[] as Question[],//问答
        qtotal:0 as number,//问答总条数
    }),

   actions:{
    //检索问题
    async selectQuestions(params:{pageNum:number,keys:string}) {
        if(params.keys===''){
            try{
            const resp = await axios({
                method: 'get',
                url: 'question/findAllQues/'+params.pageNum,
                headers: {
                    'Authorization': window.sessionStorage.getItem('token'),
                },
            })
            this.questions = resp.data.data.list
            this.qtotal = resp.data.data.total
        }catch{//
        }
        }else{
           try {const resp = await axios({
                method: 'get',
                url: 'question/findPageQues/'+params.keys+"/"+params.pageNum,
                headers: {
                    'Authorization': window.sessionStorage.getItem('token'),
                },
            })
            this.questions = resp.data.data.list
            this.qtotal = resp.data.data.total
        }catch{
                //
            }
        }
    },
   //问答加载
     async loadQuestions(page:number){
        try {
             const resp = await axios({
             method:'get',
             url:'question/findAllQues/'+page
          })
           this.questions = resp.data.data.list
            this.qtotal = resp.data.data.total
      } catch {        // 
     }
    },
    //求购请求
    async loadNeeds(page:number){
        try {
            const resp = await axios({
             method:'get',
             url:'order/goods/'+page
          })
          this.sgoods = resp.data.data.list;
          this.stotal = resp.data.data.total;
      } catch {        // 
     }
    },

    //购物车添加
    async addOrderToCart(id:number) {
        return axios({
            method: 'post',
            url: 'cart/add/' + id
        }).catch((err) => {
            alert("添加失败,请先登录");
          });
    },
    //
    detail2(id:number){
        this.flag2="need"
         this.detailid = id;
         router.push('/detail')
     },

     //详细信息
     detail(id:number){
        this.flag2="good"
         this.detailid = id;
         router.push('/detail')
     },
     kdetail(id:number){
        this.detailid = id;
        router.push('/kdetail')
     },
    async loadKnow(page:number){
        try {
            const resp = await axios({
             method:'get',
             data:1,
             url:'knowledge/'+page
          })
          this.knows = resp.data.data.list;
          this.ktotal = resp.data.data.total;
      } catch {        // 
     }
    },

    //读取商品
    async loadGoods(page:number){
        try {
              const resp = await axios({
               method:'get',
               data:1,
               url:'order/All/'+page
            })
            this.goods = resp.data.data.list;
            this.gtotal = resp.data.data.total;

        } catch {        // 
    }
    console.log(this.goods[0].createTime)
    console.log(this.gtotal)
    },

    //登出
    logout(){
       this.token = ''
       window.sessionStorage.removeItem("token")
       router.push('/login')
    },

    //登录
    async login() {
        try {
            console.log("login请求前");
            console.log(this.user);
            const resp = await axios({
               method:'post',
               data:this.user,
               url:'user/login'
           })
           console.log(resp.data.flag)
           this.flag = resp.data.flag;
           if(this.flag == true)
           {this.token = resp.data.data
           this.message = resp.data.message
           open(this.message)
         }
         else{
             open('密码或账号错误')
         }
        } catch {
            // 
        }
        window.sessionStorage.setItem("token",this.token)
        console.log(window.sessionStorage.getItem('token'))
        router.push('/home')
    },

    //注册
    async register() {
            try {
                console.log("请求前");
                console.log(this.user);
            const resp = await axios({
                    method:'post',
                    data:this.user,
                    url:'user/register'
                })
                console.log(resp.data.message)
                this.message = resp.data.message;
                open(this.message)
            } catch {
                // 
            }
        }

   }

})