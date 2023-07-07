<template>

  <!-- 导航栏 -->
   <el-row  class="tac" >
     <el-col :span="16">
           <el-menu
               :default-active="$route.path"
                class="el-menu-vertical-demo" router> 

                <!-- 首页 -->
               <el-menu-item  index="/home/index">
                 <el-icon>
                  <Menu />
                 </el-icon>
                 <span>首页</span>
                </el-menu-item>

                <!-- 商品货源  -->
               <el-menu-item index="/home/source">
                     <el-icon><User /></el-icon>
                    <span>商品货源</span>
                 </el-menu-item>
                
                 <!-- 求购需求  -->
               <el-menu-item index="/home/request">
                     <el-icon><User /></el-icon>
                    <span>求购请求</span>
                 </el-menu-item>

                <!-- 农业知识  -->
               <el-menu-item index="/home/knowledge">
                     <el-icon><User /></el-icon>
                    <span>农业知识</span>
                 </el-menu-item>

                <!-- 专家指导  -->
               <el-menu-item index="/home/guidance">
                     <el-icon><User /></el-icon>
                    <span>专家指导</span>
                 </el-menu-item>

                <!-- 购物车  -->
               <el-menu-item index="/home/shoppingcart">
                     <el-icon><User /></el-icon>
                    <span>购物车</span>
                 </el-menu-item>

                 <!-- 用户详情页  -->
                 <el-sub-menu index="1">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>设置</span>
                    </template>
                    <el-sub-menu index="3">
                            <template #title>
                              <span>个人中心</span>
                            </template>
                            <el-menu-item index="/home/UserDetial">个人基本信息</el-menu-item>
                            <el-menu-item index="/UserManage" @click="shuaxin">用户管理</el-menu-item>
                            <el-menu-item index="/home/MyKnowledge">我的发布</el-menu-item>
                            <el-menu-item index="/home/MyKnowledge">我的需求</el-menu-item>
                            <el-menu-item index="/home/mypublicG">我的商品</el-menu-item>
                            </el-sub-menu>
                          <el-sub-menu index="2">
                            <template #title>
                              <span>专家管理</span>
                            </template>

                            <el-menu-item index="/home/MyQuestion">我的问答</el-menu-item>
                            <el-menu-item index="/home/myappointmennt">我的预约</el-menu-item>
                            <el-menu-item index="/home/MyKnowledge">我的知识</el-menu-item>

                          </el-sub-menu>
                      
                      <el-menu-item index="/aboutUs">关于我们</el-menu-item>
                    
                </el-sub-menu>
            </el-menu>
      </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

//鉴权
import type{User} from '@/dataource/Types'
import {ADMIN} from '@/dataource/UserType'
import router from '@/router';
import { onMounted } from 'vue';
    //取出user用户
    let storedData = window.sessionStorage.getItem('user')
    if(storedData!=null){
     console.log('user存在');
    }else{
     const user:User = {
     avatar:'',
     nickName:'',
     phone:'',
     identityNum:'',
     address:'',
     userName:'',
     realName:''
     }
     storedData = JSON.stringify(user)
     console.log('user不存在');
   }
   const user = JSON.parse(storedData)
   
//点击后自动刷新页面
const shuaxin = ()=>{
  console.log(user.role)
  //   setTimeout(()=>{
  //   window.location.reload()
  // },100)
}
</script>
<style></style>