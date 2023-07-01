<template>
    <div class="common-layout">
      <el-container>
        <el-header class="head">
            <div class="title">
            <el-icon size="30px" id="ic"><ShoppingCart /></el-icon>
            <h2 id="h">农产品购物界面</h2>
        </div>
        <span class="search">
            <el-icon class="ss"><Search /></el-icon>
            <input type="text" placeholder="搜索商品" />
        </span>
        </el-header>
        <!-- main -->
        <el-main class="main">
            <template>
            <div>
               <el-config-provider :locale="locale">
               <el-table mb-1 :data="[]" />
               <el-pagination :total="100" />
               </el-config-provider>
            </div>
           </template>
        </el-main>
      </el-container>
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
  <style scoped>
.head{
    border: 1px solid yellow;
}
.main{
    border: 1px solid yellow;
    padding: 0;
}
.title{
    display: flex;
}
#ic{
    position: relative;
    left:  1%;
    top: 25.5%;
}
#h{
    position: relative;
    left:  2%;
    top: 25%;
}
.search{
   display: flex;
   height: 25px;
   position: absolute;
   top: 10%;
   left: 85%;
}
input{
   border-radius: 50px;
}
.ss{
    position: relative;
    left: 85%;
    top: 28%;
}
</style>
  