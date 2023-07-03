<template >
  <div class="a">
    <div class="login">
      <div class="le">
    <img id="im1" src="../assert/mai2.webp">
     </div>
   <div class="ri">
      <div class="head">
        <el-icon size="40px" color="rgb(151, 231, 58)" id="h"><Pear /></el-icon>
        <h2>登录界面</h2>
    </div>
    
    <el-form
      ref="account"
      :model="store.user"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
    >
    
      <el-form-item label="" prop="username" id="ff1">
        <el-icon size="30px" id="in"><User /></el-icon>
        <el-input v-model="store.user.userName"  placeholder="用户名"/>
      </el-form-item>
      <el-form-item label="" prop="pass" id="ff" >
        <el-icon size="30px" id="in"><Lock /></el-icon>
        <el-input v-model="store.user.password" type="password" autocomplete="off" placeholder="密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button
        >
        <el-button type="success"  @click="regit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
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
    <el-form-item label="nickName">
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
  import  { ElMessage,ElMessageBox } from "element-plus"
  import  {USER,ADMIN} from '@/dataource/UserType'

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
      store.login();
  }
  const register = () => {
    store.user.nickName = newuser.username;
    store.user.password = newuser.password;
    store.user.role = newuser.role;
    store.register();
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

  
  <style >
.login{ 
    position: fixed;
    top: 10vh;
    left: 45vh;
    width: 750px;
    height: 400px;
    padding-top: 0px;
    border: 0px solid rgb(151, 231, 58);
    background-color: rgba(255, 255, 255,0.7);
    border-radius: 10px;
}
#ff{
  display: flex;
  
}
#ff1{
  display: flex;
  margin-bottom: 0;
}
.demo-ruleForm{
   width: 70%;
}
#in{
  display: inline-block;
  margin-left: 10%;
  position: relative;
  right: 30%;
  top: 45%;
}
.head{
  display: flex;
  margin-left: 25%;
  margin-top: 5%;
}
h2{
  margin: 0;
  margin-top: 1%;
}
.le{
  margin: 0;
  padding: 0;
  display: inline-block;
}

.ri{
  margin: 0;
  padding: 0;
  display: inline-block;
  position: fixed;
  top: 13vh;
  width: 35%;
  height: 40%;
}
#im1{
  width: 40vh;
  height: 53vh;
  margin: 0;
  padding: 0;
  border-radius: 10px;
}
*{
  padding: 0;
  margin: 0;
}
.a{
  height: 97vh;
  width: 100vw;
   border: 0px solid red;
   background-image: url('../assert/back.jpg') ;
}
</style>