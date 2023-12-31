import { defineStore } from 'pinia'
import axios from '@/axios';
import type { Know,ResultVO,Question,Discuss, User,Good,Expert,Reserve } from '@/dataource/Types';
import router from '@/router';
import {open} from  '@/components/MessageView.vue'
export  const useStore = defineStore('useStore', {
    state: () => ({
        user: {} as User ,//用户信息
        message: '' as string,//后端返回信息    
        exception: '' as string,//异常信息
        page:1,
        users:[] as User[],//用户列表
        goods:[] as Good[],//商品
        sgoods:[] as Good[],//货源商品
        discuss:[] as Discuss[],//讨论
        gtotal:0 as number,//商品总数
        ktotal:0 as number,//知识总数
        stotal:0 as number,//货源总数
        token:'',
        flag:false,//登录标识
        flag2:"",//detail页面标识
        knows:[] as Know[],//知识列表
        detailid:0 ,//detail识别id
        questions:[] as Question[],//问答
        qtotal:0 as number,//问答总条数
        question:{} as Question,//指定问题
        experts:[] as Expert[],//专家列表
        etotal:0 as number,//专家总数
        userquestions:[] as Question[],//个人的问答列表
        ename:'' as string,//专家名字
        publicType:"",//发布类型
        reserves:[] as Reserve[],
        good:{ } as Good,//指定商品
        myType:"" as string//我的页面类型
    }),

   actions:{
    //修改我的商品
    async changeMygoods(form:{type:string
        orderStatu:number
        picture:string
        title: string
        price:number
        content: string}){
        try {
             const resp = await axios({
             method:'put',
             url:'order/'+this.good.orderId,
             data:form
          })
            open(resp.data.message)
      } catch {        // 
     }
    },
    //修改页面跳转
     updateMyg(id:number){
      this.good = this.goods.find(g=>g.orderId == id) as Good
      router.push("/handleUp")
     },
    //删除我的商品
    async deleMygoods(id:number){
        try {
             const resp = await axios({
             method:'delete',
             url:'order/'+id
          })
            open(resp.data.message)
      } catch {        // 
     }
    },
    //添加商品
    async addPublicPG(form:{ 
        type:string
        orderStatu:number
        picture:string
        title: string
        price:number
        content: string}){
                try {
                     const resp = await axios({
                     method:'post',
                     url:'order',
                     data:form
                  })
                   open(resp.data.message)
        
              } catch {        
                open("添加失败")
             }
            },
    //加载我的需求
    async loadMyneedss(page:number){
        try {
             const resp = await axios({
             method:'get',
             url:'order/searchAllMyNeeds/'+page
          })
            this.sgoods = resp.data.data.list
            this.stotal = resp.data.data.total
      } catch {        // 
     }
    },
    //加载我的商品
    async loadMygoods(page:number){
        try {
             const resp = await axios({
             method:'get',
             url:'order/searchAllMyGoods/'+page
          })
            this.goods = resp.data.data.list
            this.gtotal = resp.data.data.total
      } catch {        // 
     }
    },
    //添加预约
    async addAppoint(form:{ 
    phone:string,
    soilCondition:string,
    plantCondition:string,
    plantDetail:string,
    plantName:string,
    address:string,
    area:string,
    status:number,
    expertName:string,}){
            try {
                console.log(window.sessionStorage.getItem("token"))
                 const resp = await axios({
                 method:'post',
                 url:'reserve/addReserve',
                 data:form
              })
               open(resp.data.message)
    
          } catch {        
            open("预约失败")
         }
        },

    //查找预约
    async searchReserve(role:string){
        console.log('if前')
        if(role=='user'){
            try {
                console.log('查询前')
                const resp = await axios({
                method:'get',
                url:'reserve/selectReserveByNowUser/'+'questioner'
             })
                console.log(resp.data.message)
                console.log(resp.data.data)
              this.reserves = resp.data.data
               this.qtotal = resp.data.data.total
            } catch {        // 
            }
        }
        else{
            try {
                const resp = await axios({
                method:'get',
                url:'reserve/selectReserveByNowUser/'+'answerer'
             })
               this.reserves = resp.data.data.list
               this.qtotal = resp.data.data.total
            } catch {        // 
            }  
        }
        console.log('if后')
    },

    //删除预约
    async deleteServe(id:number){
        try {
            const resp = await axios({
            method:'delete',
            url:'reserve/deleteReserveById/'+id
         })
           console.log('删除成功')
        } catch {        // 
        }  
    },
    //添加提问
    async addQuetion(form:{ 
    title:string,
    plantName:string,
    phone:string,
    expertName:string,
    status:number,
    question:string}){
        try {
             const resp = await axios({
             method:'post',
             url:'question/add',
             data:form
          })
           open(resp.data.message)

      } catch {        // 
     }
    },
    //加载专家列表
    async loadExperts(){
        try {
             const resp = await axios({
             method:'get',
             url:'user/searchAllExpert'
          })
            this.experts = resp.data.data
      } catch {        // 
     }
    },
    //查找返回指定问题
    findQ(id:number){
       this.question= this.questions.find(q=>q.id==id) as Question
    },

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

    //加载个人的问题
    async loaduserQuestions(role:string){
        console.log('if前')
        if(role=='user'){
            try {
                console.log('查询前')
                const resp = await axios({
                method:'get',
                url:'question/selectQuestionByNow/'+'questioner'
             })
                console.log(resp.data.message)
                console.log(resp.data.data)
              this.userquestions = resp.data.data
               this.qtotal = resp.data.data.total
            } catch {        // 
            }
        }
        else{
            try {
                const resp = await axios({
                method:'get',
                url:'question/selectQuestionByNow/'+'answerer'
             })
               this.questions = resp.data.data.list
               this.qtotal = resp.data.data.total
            } catch {        // 
            }  
        }
        console.log('if后')
    },

    //根据问题id删除问题
    async deleteQuestion(id:number){
        try {
            const resp = await axios({
            method:'delete',
            url:'question/deleteQuestionById/'+id
         })
           console.log('删除成功')
           router.push('/home/MyQuestion')
        } catch {        // 
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
             url:'order/needs/'+page
          })
          this.sgoods = resp.data.data.list;
          this.stotal = resp.data.data.total;

      } catch {        // 
     }
    },

    detail3(id:number){
        this.flag2="car"
         this.detailid = id;
         router.push('/detail')
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
     async todetail(id:number){
        this.detailid = id;
        router.push('/requestsdetail')
     },

     //求购页面搜索
     async searchneeds(key:string,page:number){
        try {
            const resp = await axios({
             method:'get',
             data:1,
             url:'order/selectNeedsByKeys/'+key+"/"+page
          })
          this.sgoods = resp.data.data.list;
          this.message = resp.data.data.message;
          console.log(this.message)
      } catch {        // 
     }
     },
     
     //首页搜索
     async searchgoods(key:string,page:number){
        try {
            const resp = await axios({
             method:'get',
             data:1,
             url:'order/searchGoodsByKeys/'+key+"/"+page
          })
          this.goods = resp.data.data.list;
          this.message = resp.data.data.message;
          console.log(this.message)
      } catch {        // 
     }
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
            url:'knowledge/addByKnowledge/'+id+'/'+content
        }).catch(()=>{
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
           alert(this.message)

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