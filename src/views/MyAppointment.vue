<template>
    <el-table :data="usestore.reserves" :border="parentBorder" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
          <div m="4">
         <p m="t-0 b-2" v-if="user.role=='user'">专家姓名：{{ props.row.expertName }}</p>
         <p m="t-0 b-2" v-else>提问者姓名：{{ props.row.questioner }}</p>
         <p m="t-0 b-2" >作物条件：{{ props.row.plantCondition}}</p>  
         <p m="t-0 b-2" >土壤条件：{{ props.row.soilCondition}}</p> 
         <p m="t-0 b-2" >面积：{{ props.row.area}}</p>
         <div v-if="user.role=='user'" >
            <p m="t-0 b-2" v-if="props.row.answer!=null&&props.row.answer.length!=0">专家回答: {{ props.row.answer }}</p>
          </div>
          <div v-else>
            <p m="t-0 b-2" >我的回答: {{ props.row.answer }}</p>
          </div>
        
        </div>
        </template>
      </el-table-column>
      <el-table-column label="作物名称" prop="plantName" />
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
  import Edit from '@/components/ReserveView.vue'
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
    editRef.value.open(usestore.reserves[index],index)
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
      usestore.deleteServe(usestore.reserves[index].id)
        ElMessage({
        type: 'success',
        message: `删除成功`,
      })
      location.reload();
      console.log('刷新成功')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })
  }




  onMounted(()=>{
    usestore.searchReserve(user.role as string)
    })
  </script>
  