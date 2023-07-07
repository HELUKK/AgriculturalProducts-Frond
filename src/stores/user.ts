import { defineStore } from 'pinia'
import axios from '@/axios';
import type { User,Userinfo } from '@/dataource/Types';
import { log } from 'console';
export  const userStore = defineStore('userStore', {
    state: () => ({
        user: {} as User,
        users:[] as User[]
    }),

   actions:{
        //登录后返回用户所有属性,用于用户信息展示页
        async loginSelectByUsername(){
            try {
                // console.log("try");
                // console.log(window.sessionStorage.getItem('token'))
                const resp = await axios({
                 method:'get',
                 url:'user/loginSelectByUsername'
              })
            //   console.log("根据用户名查询用户所有属性");
              
            //   console.log(resp);
              
              this.user.avatar = resp.data.data.avatar
              this.user.nickName = resp.data.data.nickName
              this.user.phone = resp.data.data.phone
              this.user.identityNum = resp.data.data.identityNum
              this.user.address = resp.data.data.address
              this.user.userName = resp.data.data.userName
              this.user.role = resp.data.data.role
              this.user.createTime = resp.data.data.createTime
              this.user.updateTime = resp.data.data.updateTime
              this.user.integral = resp.data.data.integral
              this.user.credit = resp.data.data.credit
              this.user.realName = resp.data.data.realName
            //   console.log("user:"+this.user);
              //将user存入sessionStorage
              window.sessionStorage.setItem("user",JSON.stringify(this.user))
              window.location.reload()
          } catch {        // 
            console.log('登录后返回用户所有属性失效');
         }
            
        },
        //根据用户名更新用户信息
        async loginUpdateByUsername(user:Userinfo){
          console.log('loginUpdateByUsername已运行');
          try {
              const resp = await axios({
               method:'post',
               data:user,
               url:'user/loginUpdateByUsername'
            })
            console.log('loginUpdateByUsername已运行结束');
            alert('用户信息更新成功!')
        } catch {
          console.log('根据用户名更新用户信息失效');
       }
          
      },
      //管理员:
      //根据用户名查询用户信息
      async selectByUserName(userName:String){
        console.log('selectByUserName已运行');
        try {
            const resp = await axios({
             method:'get',
             url:'user/'+userName
          })
          console.log('selectByUserName已运行结束');
      } catch {
        console.log('管理员根据用户名查询用户信息selectByUserName失效');
     }
        
    },
    //根据用户名删除用户信息
    async deleteUserByUsername(userName:String){
      console.log('deleteUserByUsername已运行');
      try {
          const resp = await axios({
           method:'delete',
           url:'user/'+userName
        })
        console.log(resp.data)
        alert('用户删除成功')
        //删除成功后自动刷新页面
        window.location.reload()
        console.log(resp.data.message)
        console.log('deleteUserByUsername已运行结束');
    } catch {
      console.log('deleteUserByUsername失效');
   }
   },
   //根据用户名更新用户信息
   async  updateUserByUsername(user:User){
    console.log('updateUserByUsername已运行');
    try {
        const resp = await axios({
         method:'put',
         data:user,
         url:'user/'+user.userName
      })
      if(resp.data.code==20001){
        alert(resp.data.message+","+resp.data.data)
      }else{
        alert('用户信息更新成功')
        //更新成功后自动刷新页面
        window.location.reload()
      }
      console.log(resp.data.message)
      console.log('updateUserByUsername已运行结束');
  } catch {
    console.log('updateUserByUsername失效');
 }
 },
  //查询所有用户
  async selectAllUser(){
    console.log('selectAllUser已运行');
    try {
        const resp = await axios({
         method:'get',
         url:'user/selectAllUser'
      })
      console.log(resp.data.data)
      this.users = resp.data.data
      window.sessionStorage.setItem("users",JSON.stringify(this.users))
      console.log(this.users)
      console.log('selectAllUser已运行结束');
  } catch {
    console.log('selectAllUser失效');
  }
  },
   }

})