<!--基本信息-->
<template>
  <div class="user-info">
   <el-avatar :size="150"
         :src="userinfo.avatar"
       />
    <user-avatar ref="avatar" :cUserAvatar="userinfo.avatar"></user-avatar>
    <el-form :model="userinfo" ref="ruleForm" label-width="100px" style="margin-top:40px">
      <el-form-item label="昵称：" prop="nickName">
        <el-input v-model="userinfo.nickName" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名：" prop="realName">
        <el-input v-model="userinfo.realName" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="账号:" prop="userName">
        <el-input v-model="userinfo.userName" style="width:300px" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="phone">
        <el-input v-model="userinfo.phone" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="身份证：" prop="identityNum">
        <el-input v-model="userinfo.identityNum" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <el-input v-model="userinfo.address" style="width:300px"></el-input>
      </el-form-item>
    </el-form>
    <el-button style="margin-left: 310px;" type="success" @click="updateInfo">修改</el-button>
  </div>
 </template>
    
 <script setup lang="ts">
    import { reactive, ref } from 'vue'
    import type { User } from '@/dataource/Types'
    import {userStore} from '@/stores/user'
 
    const use = userStore()
 
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
   const userinfo = reactive({
     avatar:user.avatar,
     nickName:user.nickName,
     phone:user.phone,
     identityNum:user.identityNum,
     address:user.address,
     userName:user.userName,
     realName:user.realName
    })
    
    const updateInfo = async()=>{
     await use.loginUpdateByUsername(userinfo);
     use.loginSelectByUsername();
    }
 </script>
    
 <style lang="less" scoped>
    .user-info {
     margin: 0px auto;
     width: 900px;
     padding: 0px auto;
     background: #fff;
     height: 100%;
     min-height: 600px;
    }
 
 
 </style>