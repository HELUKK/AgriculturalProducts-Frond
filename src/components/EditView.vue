<template>
    <el-dialog v-model="dialogVisible" title="用户信息" width="400px">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="from.userName" :readonly="true"/>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input placeholder="请输入昵称" v-model="from.nickName"/>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input placeholder="请输入身份证号" v-model="from.identityNum"/>
        </el-form-item>
        <el-form-item label="角色">
          <el-select
            v-model="from.role"
            placeholder="用户角色"
            clearable
          >
        <el-option label="user" :value="USER" />
        <el-option label="expert" :value="EXPERT" />
        <el-option label="admin" :value="ADMIN" />
      </el-select>
        </el-form-item>
        <el-form-item label="电话">
          <el-input placeholder="请输入电话" v-model="from.phone"/>
        </el-form-item>
        <el-form-item label="地址">
          <el-input placeholder="请输入地址" v-model="from.address"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onUpdata">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
<script lang="ts" setup>
// TODO: 编辑
import { ref } from 'vue'
import type {User} from '@/dataource/Types'
import {userStore} from '@/stores/user'
import {USER,EXPERT,ADMIN} from '@/dataource/UserType'
const fromf:User={
    userName:"",
    nickName:"",
    phone:"",
    identityNum:"",
    address:"",
    role:"",
    avatar:"",
    realName:""
  }
  const from = ref(fromf)
// 弹框开关
const dialogVisible = ref(false)

const open = (row:User)=>{
  //打开弹框
  dialogVisible.value = true
  if(row.userName){
    from.value.userName = row.userName
  }
  if(row.nickName){
    from.value.nickName = row.nickName
  }
  if(row.phone){
    from.value.phone = row.phone
  }
  if(row.identityNum){
    from.value.identityNum = row.identityNum
  }
  if(row.address){
    from.value.address = row.address
  }
  if(row.role){
    from.value.role = row.role
  }
}

defineExpose({
  open
})
const emit = defineEmits(['on-updata'])

const user = userStore()
//点击更新按钮,更新数据,关闭弹窗通知父页面更新列表数据
const onUpdata = async()=>{
  await user.updateUserByUsername(from.value)
  dialogVisible.value = false
  emit('on-updata')
}
</script>

<style scoped>
.el-input {
  width: 290px;
}
</style>
