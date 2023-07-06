<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户名" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.userName }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.nickName }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="身份证号" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.identityNum }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.role }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.phone }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="创建日期" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="修改日期" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <Edit ref="editRef" @on-updata="getList"/>
</template>
  
  
<script lang="ts" setup>
  import { Timer } from '@element-plus/icons-vue'
  import {User} from '@/dataource/Types'
  import {userStore} from '@/stores/user'
  import { onMounted, ref } from 'vue';
  import Edit from '@/components/EditView.vue'

  //取出user用户
  let storedData = window.sessionStorage.getItem('users')
   if(storedData!=null){
    console.log('users存在');
   }else{
    const users:User[] =[{}]
    storedData = JSON.stringify(users)
    console.log('users不存在');
  }
  const userData = JSON.parse(storedData)
  console.log(userData);
  

  const user = userStore()
  const tableData: User[] = userData

  //初始更新用户数据
  onMounted(async() =>{
    await user.selectAllUser()
  })
  

  //编辑页面绑定
  const editRef = ref()
  const handleEdit = (row:User) => {
    console.log(row)

    //打开页面并传入数据双向绑定
    editRef.value.open(row)
    // user.updateUserByUsername(userName)
  }

  
  //删除
  const handleDelete = async(row: User) => {
    console.log(row)
    if(row.userName){
        await user.deleteUserByUsername(row.userName)
    }else{
        console.log('userName不存在');
    }
    getList()
  }
  
  //每次update重新获取用户数据
  const getList = async()=>{
    await user.selectAllUser()
  }
</script>