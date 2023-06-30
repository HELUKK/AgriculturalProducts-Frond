<template>
    <div class="login">
    <el-form
      ref="account"
      :model="store.user"
      status-icon
      label-width="40%"
      class="demo-ruleForm"
      id="ff"
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="store.user.nickName" />
      </el-form-item>
      <el-form-item label="Password" prop="pass"  >
        <el-input v-model="store.user.password" type="password" autocomplete="off"  />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">登录</el-button
        >
        <el-button type="success"  @click="regit">注册</el-button>
      </el-form-item>
    </el-form>


    <!--隐藏表单-->
    <el-drawer
    v-model="drawer"
    title="注册表单"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
    <!--注册表单-->
    <el-form :inline="true" :model="newuser" class="demo-form-inline" >
    <el-form-item label="user-name">
      <el-input v-model="newuser.username"  placeholder="用户名" clearable />
    </el-form-item>
    <el-form-item label="user-role">
      <el-select
        v-model="newuser.role"
        placeholder="role"
        clearable
      >
        <el-option label="user" :value="usertype.user" />
        <el-option label="admin" :value="usertype.admin" />
      </el-select>
    </el-form-item>
    <el-form-item label="user-password">
      <el-input v-model="newuser.password"  placeholder="密码" clearable />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register" >注册</el-button>
    </el-form-item>
  </el-form>
  </el-drawer>



</div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { useStore } from '@/stores/index'
  import { ElMessage,ElMessageBox } from 'element-plus'
  import  {USER,ADMIN} from '@/dataource/UserType'
   import type { Action } from 'element-plus'

const open = () => {
  ElMessageBox.alert('This is a message', '注册结果', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
  const usertype = {
     user: USER,
     admin: ADMIN
  }
  const newuser = reactive({
  username: '',
  password: '',
  role: '',
})

  const store =  useStore();
  const login = () => {

  }
  const register = () => {
    store.user.nickName = newuser.username;
    store.user.password = newuser.password;
    store.user.role = newuser.role;
    store.register();
    console.log(store.message)
    ElMessageBox.alert(store.message, '注册结果', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })

  }

  const regit = () => {
    drawer.value = true;

  }

const drawer = ref(false)
const direction = ref('rtl')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('想要关闭注册表单？')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
  </script>
  <style>
.login{ 
    margin: 20% 20% 30% 20%;
    width: 50%;
    height: 40%;
    padding: 20px;
    border: 1px solid red;
}
#ff{
    margin-right: 20%;
}
</style>