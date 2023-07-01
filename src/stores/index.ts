import { defineStore } from 'pinia'
import axios from '@/axios';
import type { ResultVO, User,Good } from '@/dataource/Types';
import router from '@/router';


export  const useStore = defineStore('useStore', {
    state: () => ({
        user: {} as User ,
        message: '' as string,
        exception: '' as string,
        users:[] as User[]
    }),

   actions:{
    async loadGood(){
        try {
            
           const resp = await axios({
               
            })
           
        } catch {
            // 
        }
    },
    async login() {
         router.push('/home')
        // try {
        //     console.log("login请求前");
        //     console.log(this.user);
        //   const resp = await axios({
        //        method:'post',
        //        data:this.user,
        //        url:''
        //    })
        // } catch {
        //     // 
        // }
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
        } catch {
            // 
        }
    }

   }

})