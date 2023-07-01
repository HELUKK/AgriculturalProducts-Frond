<template>
    <div class="common-layout">
      <el-container class="all"> 
        <el-header class="head">Header</el-header>
        <el-container>
          <el-aside width="200px">
            <!-- aside -->
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
        <el-menu-item index="4" class="daoh">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</el-aside>

          <!-- main -->
          <el-main class="main">
             <RouterView></RouterView>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>


<script lang="ts" setup>
import router from '@/router';

 const goshop = () =>{
     router.push('/goshop')
     console.log("被调用了")
 }

  

</script>














<style scoped>
.aside{
    width: 200px;
}
.tac{
    border: 0px solid red;
    background-color: rgb(59, 62, 65);
    height: 853px;
    margin: 0;
}
.all{
    height: 100%;
}
.mb-2{
  margin-left: 30%;
  padding-top: 10%;
  padding-bottom: 10%;
  font-size: 20px;
  color: rgb(243, 179, 84);
  height: auto;
}
.main{
    border: 1px solid red;
}
.daoh{
    height: auto;
}
.head{
    border: 1px solid red;
}
</style>