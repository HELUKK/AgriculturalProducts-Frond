<template>
    <el-table
      :data="store.sgoods"
      :default-sort="{ prop: 'updateTime', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="content" label="内容" width="360" />
      <el-table-column prop="updateTime" label="时间" sorble  />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  import type { TableColumnCtx } from 'element-plus'
  import {useStore} from '@/stores/index';
  import {  onMounted } from 'vue'


  const store=useStore()

  interface User {
    date: string
    name: string
    address: string
  }
  
  const formatter = (row: User, column: TableColumnCtx<User>) => {
    return row.address
  }
  
  onMounted(()=>{
  store.loadNeeds(1)
})
  </script>
  