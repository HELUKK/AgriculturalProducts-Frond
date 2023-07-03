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
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
  </template>


<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationAside from '@/components/NavigationAside.vue';
import router from '@/router';


import { useStore } from '@/stores/index';
import {open} from '@/components/MessageView.vue'
import { onMounted } from 'vue';
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
</script>
<style scoped>

</style>