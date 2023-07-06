<template>
    <div class="question-container">
      <el-form ref="form"  :rules="ruleForm" label-width="110px">
        <el-form-item label="标题：" prop="title">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="内容：" prop="question">
          <el-input type="textarea" v-model="question"></el-input>
        </el-form-item>
        <el-form-item label="农作物名称：" prop="plantName">
          <el-input type="textarea" v-model="plantName"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" prop="phone">
          <el-input type="text" v-model="phone"></el-input>
        </el-form-item>
        <el-form-item style="float:right;">
          <el-button type="success" @click="onSubmit">去提问</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

<script setup lang="ts">
import { ref } from "vue";
import {useStore} from "@/stores/index"
const store = useStore()
const title = ref("")
const  plantName = ref("")
const  phone = ref("")
const question = ref("")
const ruleForm = ref({ title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        plantName: [{ required: true, message: '请输入农作物名称', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        question: [{ required: true, message: '请输入内容', trigger: 'blur' }],})

const onSubmit = ()=>{

  store.addQuetion({title:title.value,
           plantName:plantName.value,
           phone:phone.value,
           expertName:store.ename,
           status:0,
           question:question.value})
}    
</script>


<style scoped>

.question-container{
  width: 1000px;
  height: 100%;
  margin: 10px auto;
  background: #fff;
  padding: 20px;
}
</style>