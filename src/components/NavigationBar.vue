<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="#"><el-icon><School /></el-icon>毕设选导师系统</el-menu-item>
      <div class="flex-grow" />
      <UserLogout/>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import UserLogout from './UserLogout.vue';
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  
  </style>
  