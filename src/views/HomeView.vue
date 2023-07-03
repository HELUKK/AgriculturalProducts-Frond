<template>


  <div class="common-layout">
    <el-container>
      <el-header>
        <NavigationBar>
            Header
        </NavigationBar>
       </el-header>
      <el-container>
        <el-aside >
          <NavigationAside>

          </NavigationAside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
 <!--    <div class="common-layout">
      <el-container class="all"> 
        <el-header class="head">
          <el-icon size="50px" color="#fffffffd" class="ii"><Shop /></el-icon>
          <el-icon size="40px" color="#fffffffd" class="cc"><Watermelon /></el-icon>
          <el-icon size="40px" color="#fffffffd" class="cc"><Grape /></el-icon>
          <el-icon size="40px" color="#fffffffd" class="cc"><Orange /></el-icon>
          <el-icon size="40px" color="#fffffffd" class="cc"><Pear /></el-icon>
          <el-icon size="40px" color="#fffffffd" class="cc"><Apple /></el-icon>
          <h1 class="h">融销通</h1>
          <h2 class="h2">.com</h2>
          <el-button type="Default" class="zx" @click="logout" round>注销</el-button>
        </el-header>
        <el-container>
          <el-aside width="200px">
            aside
            <el-row class="tac">
    <el-col :span="30" class="aside">
      <h5 class="mb-2">导航栏</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1" class="daoh">
          <template #title>
            <el-icon><Watermelon /></el-icon>
            <span>购物栏</span>
          </template>
          <el-menu-item index="1-1" @click="goshop">农购</el-menu-item>
          <el-menu-item index="1-2">购物车</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2" class="daoh">
          <template #title>
            <el-icon><ShoppingCartFull /></el-icon>
          <span>订单管理</span>
          </template>
          <el-menu-item-group title="查询">
            <el-menu-item index="2-1" >订单查询</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="管理">
            <el-menu-item index="2-2">订单管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="3" class="daoh">
          <el-icon><document /></el-icon>
          <span>个人信息管理</span>
        </el-menu-item>
        <label @click="hello">
        <el-menu-item index="4" class="daoh">
          <el-icon><Orange /></el-icon>
          <span >hello</span>
        </el-menu-item>
      </label>
      </el-menu>
    </el-col>
  </el-row>
</el-aside>

          main
          <el-main class="main">
             <RouterView id="mm"></RouterView>
          </el-main>
        </el-container>
      </el-container>
    </div> -->
  </template>


<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationAside from '@/components/NavigationAside.vue';

/* import router from '@/router';


import { useStore } from '@/stores/index';
import {open} from '@/components/MessageView.vue'
 const store = useStore(); 
 const hello = () =>{
     router.push('/hello')
 }
 const goshop = () =>{
     router.push('/goshop')
     console.log("被调用了")
 }
 const logout= () => {

   store.logout();
   open("注销成功")
 }
 */
</script>
<style scoped>

</style>