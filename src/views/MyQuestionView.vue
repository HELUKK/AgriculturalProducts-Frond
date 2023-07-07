<template>
    <el-table :data="usestore.userquestions" :border="parentBorder" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
         <p m="t-0 b-2">专家姓名：{{ props.row.expertName }}</p>
          <p m="t-0 b-2">专家电话：{{ props.row.phone }}</p>
          <p m="t-0 b-2" v-if="props.row.answer!=null&&props.row.answer.length!=0">问题状态: <el-tag class="ml-2" type="success">已回答</el-tag></p>
          <p ma="t-0 b-2" v-else>问题状态: <el-tag class="ml-2" type="danger">未回答</el-tag></p>
          <p m="t-0 b-2" v-if="props.row.answer!=null&&props.row.answer.length!=0">回答: {{ props.row.answer }}</p>
        
        </div>
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title" />
      <el-table-column label="内容" prop="question" />
      <el-table-column v-if="user.role=='user'" label="专家姓名" prop="expertName" />
      <el-table-column v-if="user.role=='expert'" label="提问者" prop="questioner" />

      <el-table-column
      prop="tag"
      label="回答状态"
      width="100"

    >
      <template #default="scope">
        <el-tag
         v-if="scope.row.answer!=null&&scope.row.answer.length!=0"
          type= 'success'
          disable-transitions
          >已回答</el-tag
        >
        <el-tag
         v-else
          type="danger"
          disable-transitions
          >未回答</el-tag
        >
      </template>
    </el-table-column>

      <el-table-column align="right">
      <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index)">修改</el-button>
            <el-button size="small" @click="handleDelete(scope.$index)">删除</el-button>
         </template>
    </el-table-column>
    </el-table>


   

       <Edit ref="editRef" />
  </template>
  
  
  <script lang="ts" setup>
  import { ref,onMounted } from 'vue'
  import {useStore} from '@/stores/index';
  import {userStore} from '@/stores/user';
  import type { User } from '@/dataource/Types';
  import { ElMessage,ElMessageBox } from 'element-plus'
  import Edit from '@/components/QuestionView.vue'
  let storedData = window.sessionStorage.getItem('user')

  const usestore=useStore()
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
  const userstore=userStore()
  const user = JSON.parse(storedData)
  const editRef = ref()
  const handleEdit = (index:number) => {

    //打开页面并传入数据双向绑定
    editRef.value.open(usestore.userquestions[index],index)
    // user.updateUserByUsername(userName)
  }

  //删除
  const handleDelete = async(index:number) => {
  
   ElMessageBox.confirm(
    '是否确定删除该问答?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      usestore.deleteQuestion(usestore.userquestions[index].id)
        ElMessage({
        type: 'success',
        message: `退选成功`,
      })
      location.reload();
      console.log('刷新成功')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退选',
      })
    })
  }




  onMounted(()=>{
    console.log(user)
    console.log(111)
    usestore.loaduserQuestions(user.role as string)
    })
  </script>
  