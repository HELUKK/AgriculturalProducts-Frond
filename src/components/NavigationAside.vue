<template>

  <!-- 导航栏 -->
   <el-row  class="tac" >
     <el-col :span="16">
           <el-menu
               :default-active="$route.path"
                class="el-menu-vertical-demo" router> 

                <!-- 首页 -->
               <el-menu-item  index="/student/index">
                 <el-icon>
                  <Menu/>
                 </el-icon>
                 <span>首页</span>
                </el-menu-item>

                <!-- 商品货源  -->
               <el-menu-item index="/student/select-teacher">
                     <el-icon><User /></el-icon>
                    <span>商品货源</span>
                 </el-menu-item>
                
                 <!-- 求购需求  -->
               <el-menu-item index="/student/select-teacher">
                     <el-icon><User /></el-icon>
                    <span>求购请求</span>
                 </el-menu-item>

                <!-- 农业知识  -->
               <el-menu-item index="/student/select-teacher">
                     <el-icon><User /></el-icon>
                    <span>农业知识</span>
                 </el-menu-item>

                <!-- 专家指导  -->
               <el-menu-item index="/student/select-teacher">
                     <el-icon><User /></el-icon>
                    <span>专家指导</span>
                 </el-menu-item>

                <!-- 购物车  -->
               <el-menu-item index="/student/select-teacher">
                     <el-icon><User /></el-icon>
                    <span>购物车</span>
                 </el-menu-item>

                 <!-- 融资申请  -->
                 <el-sub-menu index="1">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>融资申请 One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                      <template #title>item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
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
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
