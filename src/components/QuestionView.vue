<template>
    <el-dialog v-model="dialogVisible" title="用户信息" width="400px">
      <el-form label-width="80px">
        <el-form-item label="标题：">
          <el-input disabled placeholder="请输入标题" v-model="from.title"/>
        </el-form-item>
        <el-form-item label="内容：">
          <el-input type="textarea" v-bind:disabled="flag" placeholder="请输入内容" v-model="from.question"/>
        </el-form-item>
        <el-form-item label="回答：">
          <el-input type="textarea" v-bind:disabled="!flag" placeholder="请输入回答" v-model="from.answer"/>
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
import type {Question, User} from '@/dataource/Types'
import {userStore} from '@/stores/user'
import {USER,EXPERT,ADMIN} from '@/dataource/UserType'
import {useStore} from '@/stores/index';
const usestore=useStore()
const fromf:Question={
id: 0,
expertName: '',
questioner: '',
phone: '',
plantName: '',
title: '',
question: '',
answer: '',
status: 0,
userName:'',
nickName:' ',
identityNum:0,
address: ' ',
role: '',
}

  const index2=ref(0)
  const from = ref(fromf)
// 弹框开关
const dialogVisible = ref(false)
const flag=usestore.user.role=='user'
const open = (row:Question,index:number)=>{
  //打开弹框
  dialogVisible.value = true
  from.value.answer=row.answer
  from.value.title=row.title
  from.value.question=row.question
  index2.value=index
}

defineExpose({
  open
})

const emit = defineEmits(['on-updata'])

const user = userStore()
//点击更新按钮,更新数据,关闭弹窗通知父页面更新列表数据
const onUpdata = async()=>{

  usestore.userquestions[index2.value].question=from.value.question
  usestore.userquestions[index2.value].answer=from.value.answer
  await user.updateQuestion()
  dialogVisible.value = false
  emit('on-updata')
}
</script>

<style scoped>
.el-input {
  width: 290px;
}
</style>
