import { defineStore } from 'pinia'
import axios from '@/axios';
import type { Know,ResultVO, User,Good, Discuss } from '@/dataource/Types';
import router from '@/router';
import {open} from  '@/components/MessageView.vue'

export  const useStore = defineStore('useStore', {
    state: () => ({
        user: {} as User ,
        message: '' as string,
        exception: '' as string,
        page:1,
        users:[] as User[],
        goods:[] as Good[],
        sgoods:[] as Good[],
        discuss:[] as Discuss[],
        gtotal:0 as number,
        ktotal:0 as number,
        stotal:0 as number,
        token:'',
        flag:false,
        flag2:"",
        knows:[] as Know[],
        detailid:0 ,
    }),

   actions:{

    //求购请求
    async loadNeeds(page:number){
        try {
            const resp = await axios({
             method:'get',
             url:'order/needs/'+page
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

     //求购需求的详细信息
     todetail(id:number){
        this.detailid = id;
        router.push('/requestsdetail')
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

    async loadDis(id : number){
        try {
            const resp = await axios({
                method:'get',
                url:'knowledge/selectByKnowledge/'+id
            })
            this.discuss = resp.data.data
            console.log(this.discuss);
            
        }catch{
            console.error("x");
            
        }
    },
    //添加评论
    async addDiscuss(id:number,content:string){
        return axios({
            method:'post',
            url:'knowledge/addByKnowledge/'
        }).catch((err)=>{
            console.log("x");
        })
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