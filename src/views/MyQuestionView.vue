<template>
    <el-table :data="usestore.userquestions"  style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
            <p m="t-0 b-2">专家姓名：{{ props.row.expertName }}</p>
            <p m="t-0 b-2">专家电话：{{ props.row.phone }}</p>
            <p m="t-0 b-2" v-if="props.row.answer.length!=0">问题状态:<el-tag class="ml-2" type="success">已回答</el-tag></p>
            <p ma="t-0 b-2" v-else>问题状态:<el-tag class="ml-2" type="danger">未回答</el-tag></p>
        </div>
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title" />
      <el-table-column label="内容" prop="question" />
      
      <el-table-column v-if="user.role=='user'" label="专家姓名" prop="expertName" />
      <el-table-column v-if="user.role=='expert'" label="提问者" prop="questioner" />
      <el-table-column align="right">
      <template #default="scope">
            <el-button size="small" @click="">修改</el-button>
            <el-button size="small" @click="">删除</el-button>
         </template>
    </el-table-column>
    </el-table>

            <el-popover placement="right" :width="700" trigger="click">
            <template #reference>
                <el-button style="margin-right: 16px">修改</el-button>
            </template>
            <el-form label-width="120px">
            <el-form-item label="问题标题" v-model="usestore.userquestions">
            <el-input  />
            </el-form-item>
         
            <el-form-item label="Activity form">
            <el-input  type="textarea" />
            </el-form-item>
            <el-form-item>
            <el-button type="primary">Create</el-button>
            <el-button>Cancel</el-button>
            </el-form-item>
                </el-form>
            </el-popover>

  </template>
  
  
  <script lang="ts" setup>
  import { ref,onMounted,router } from 'vue'
  import {useStore} from '@/stores/index';
  import {userStore} from '@/stores/user';
  import type { Question, User } from '@/dataource/Types';
  import { ElMessage, ElMessageBox } from 'element-plus'

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
    userName:''
    }
    storedData = JSON.stringify(user)
    console.log('user不存在');
  }
  const user = JSON.parse(storedData)
  const changeflag=(user.role=='user') as boolean

  const usestore=useStore()
  const userstore=userStore()
  let changecontent=ref<string>('')
  const fuzhi=(index:number)=>{
    console.log(usestore.userquestions[index].question)
    changecontent.value=usestore.userquestions[index].question
  }

  const determine=(index:number)=>{
    usestore.userquestions[index].question=changecontent.value
  }

  onMounted(()=>{
    console.log(user)
    console.log(111)
    usestore.loaduserQuestions(user.role as string)
    })
  const childBorder = ref(false)

  </script>
  