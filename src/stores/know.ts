import { defineStore } from 'pinia'
import axios from '@/axios';
import type { Know,Discuss } from '@/dataource/Types';
import router from '@/router';
import { ref } from 'vue';
export const useknowStore = defineStore('knowStore',{
    state:()=>({
        message: '' as string,//后端返回信息    
        exception: '' as string,//异常信息
        page:1,
        discuss:[] as Discuss[],//讨论
        ktotal:0 as number,//知识总数
        token:'',
        flag:false,//登录标识
        flag2:"",//detail页面标识
        knows:[] as Know[],//知识列表
        detailid:0 ,//detail识别id
        know: {} as Know
    }),
    actions:{
        //加载知识
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
        //加载评论
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
        //详情页
        kdetail(id:number){
            this.detailid = id;
            
            router.push('/kdetail')
         }, 
        //添加评论
        async addDiscuss(id:number,content:string){
            
            return axios({
                method:'post',
                url:'knowledge/addByKnowledge/'+id+'/'+content
            }).catch(()=>{
                console.log("x");
            })
        },
        async addKnow(newKnow:Know){
            try{
                console.log(newKnow);
                return axios({
                    method:'post',
                    data:JSON.stringify(newKnow),
                    url:'knowledge'
                })
            }catch{
                console.log("添加失败");
            }
        },
        // 删除
        async deleteKnow(id: number){
            try {
                const resp = await axios({
                 method:'delete',
                 url:'knowledge/'+id
              })
              console.log(resp.data)
              alert('删除成功')
              console.log(resp.data.message)
              console.log('delete已运行结束');
          } catch {
            console.log('delete失效');
         }
        }
    }
})