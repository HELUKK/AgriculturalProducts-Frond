<template>
    <div>
     <el-config-provider :locale="locale">
        <el-table mb-1 :data="[]" />
        <el-pagination :total="100" />
      </el-config-provider>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'

  
  const language = ref('zh-cn')
  const locale = "zhCn"
  
  const toggle = () => {
    language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  }
  </script>
  