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
                  <Menu/>
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

                 <!-- 融资申请  -->
                 <el-sub-menu index="1">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>设置</span>
                    </template>
                   
                      <el-menu-item index="/home/financing">个人中心</el-menu-item>
                      <el-menu-item index="1-2">关于我们</el-menu-item>
                
                    
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

</script>
<style></style>