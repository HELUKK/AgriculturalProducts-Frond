import { defineStore } from 'pinia'
import axios from '@/axios';
import type { ResultVO, User } from '@/dataource/Types';


export  const useStore = defineStore('useStore', {
    state: () => ({
        user: {} as User ,
        message: '' as string,
        exception: '' as string,
        users:[] as User[]
    }),

   actions:{
    async liststudents() {
        try {
            const resp = await axios.get<ResultVO>('/user/')
            this.users = resp.data.data.users
        } catch {
            // 
        }
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
            this.message = resp.data.message;
        } catch {
            // 
        }
    }

   }

})