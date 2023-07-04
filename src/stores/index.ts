import { defineStore } from 'pinia'
import axios from '@/axios';
import type { Know,ResultVO, User,Good } from '@/dataource/Types';
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
        gtotal:0 as number,
        ktotal:0 as number,
        token:'',
        flag:false,
        flag2:"",
        knows:[] as Know[],
        detailid:0 
    }),

   actions:{
    async addOrderToCart(id:number) {
        return axios({
            method: 'post',
            url: 'cart/add/' + id
        }).catch((err) => {
            alert("添加失败,请先登录");
          });
    },
     detail(id:number){
        this.flag2="good"
        console.log("detail1调用")
         this.detailid = id;
         router.push('/detail')
     },
    async loadKnow(page:number){
        try {
            const resp = await axios({
             method:'get',
             data:1,
             url:'knowledge/'+page
          })
          alert('查询完成')
          this.knows = resp.data.data.list;
          this.ktotal = resp.data.data.total;

      } catch {        // 
     }
    },
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
    logout(){
       this.token = ''
       window.sessionStorage.removeItem("token")
       router.push('/login')
    },
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