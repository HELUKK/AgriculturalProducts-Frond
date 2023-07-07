<template>
    <div class="user-info">
      <el-form :model="repassRef" ref="ruleForm" label-width="150px" style="margin-top:40px">
        <el-form-item label="请输入旧密码:" prop="nickName">
          <el-input v-model="repassRef.nowPassword" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码:" prop="realName">
          <el-input v-model="repassRef.newPassword1" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入新密码:" prop="userName">
          <el-input v-model="repassRef.newPassword2" style="width:300px"></el-input>
        </el-form-item>
      </el-form>
      <el-button style="margin-left: 360px;" type="success" @click="updatePassword">确认修改</el-button>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import type { RePassword } from '@/dataource/Types'
import {userStore} from '@/stores/user'

const user = userStore()

const repass:RePassword = {}
const repassRef = ref(repass)


const updatePassword = ()=>{
    if(repassRef.value.nowPassword&&repassRef.value.newPassword1&&repassRef.value.newPassword2){
        user.updatePassword(repassRef.value)
    }else{
        alert('密码不能为空')
    }
    
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