<template>
    <div class="common-layout">
      <el-container class="ccc">
        <el-header class="head">
            <div class="title">
            <el-icon size="30px" id="ic" color="rgb(151, 231, 58)" ><ShoppingCart /></el-icon>
            <h2 id="h">农业知识界面</h2>
            <div class="buttonp">
            <el-button style="text-align: center;"  type="success"  @click="regit">添加农业知识</el-button>
            <el-button style="text-align: center;"  type="success">删除农业知识</el-button>
            </div>
        </div>
        </el-header>
        <!-- main -->
        <el-main class="main">
          <!-- 分页 -->
          <div class="example-pagination-block" >
            <el-row >
            <el-col
              v-for="(o, index) in store.knows"
              :key="o"
              :span="4"
              :offset="index > 0 ? 2 : 0"
              class="col"
            >
            <el-card id="card" :body-style="{ padding: '0px', margin:'5px' }">
              <div class="imgbox">
            <img
            :src="o.picPath"
            class="image"
            />
          </div>
            <div style="padding: 0px">
            <span id="span">{{ o.title  }}</span>
            <div class="bottom">
            <!-- <time class="time">{{ o.createTime }}</time> -->
            <el-button text class="button" @click="kdetail(o.knowledgeId)">详情</el-button>
          </div>
        </div>
        </el-card>
         </el-col>
         </el-row> 
          <el-pagination class="bu" layout="prev, pager, next" v-model:current-page="page" :total="store.ktotal"  />
          </div>
          <!-- 分页 -->
        </el-main>
      </el-container>
    </div>
    <el-drawer  v-model="drawer"
    title="添加农业知识"
    :direction="direction"
    class="ddd">
        <span>Hi, there!</span>
    <!--注册表单-->
    <el-form :inline="true" :model="newKnow" class="demo-form-inline" >

    <pre><p>  </p></pre>
    <el-form-item label="标题  ">
      <el-input v-model="newKnow.title"  placeholder="标题" clearable />
    </el-form-item>
    <pre><p>  </p></pre>
    <el-form-item label="内容  ">
      <el-input v-model="newKnow.content"  placeholder="内容" clearable />
    </el-form-item>
    <pre><p>  </p></pre>
    <el-form-item label="图片路径">
      <el-input v-model="newKnow.picPath"  placeholder="图片路径" clearable />
    </el-form-item>
    <pre><p>  </p></pre>
    <el-form-item>
      <el-button type="primary" size="large" @click="addNewKnow()" >添加农业知识</el-button>
    </el-form-item>
  </el-form>
    </el-drawer>
  </template>

  
  <script lang="ts" setup>
  import {  onMounted, reactive, ref, watch } from 'vue'
  import { useknowStore } from '@/stores/know';
  import  { ElMessageBox } from "element-plus"
  const store = useknowStore();
  const page = ref(store.page)
  const drawer = ref(false)
  const direction = ref('rtl')
  const newKnow = reactive({
    title:'',
    content:'',
    picPath:''
  })
  watch(page,(newValue)=>{
        store.loadKnow(newValue);
  })
  onMounted(()=>{
    store.loadKnow(1);
  })

  const regit = () => {
    drawer.value = true;
  }
  const kdetail = (id:number) =>{
    console.log("kdetail调用")
    store.kdetail(id);

  }
  const addNewKnow = ()=>{
    if((newKnow.title != '') && (newKnow.content != '') && (newKnow.picPath != '')){
    store.know.knowledgeId = 0
    store.know.title = newKnow.title
    store.know.content = newKnow.content
    store.know.picPath = newKnow.picPath
    store.know.createTime = new Date()
    store.know.updateTime = new Date()
    store.know.ownName = ""
    store.addKnow(store.know)
    console.log(store.know.knowledgeId);
    ElMessageBox.confirm("添加成功")
    }
    else{
      ElMessageBox.confirm("请输入完整数据")
    }
  }

  </script>
  <style scoped>
  .imgbox{
    width: 346px;
	  height: 200px;
    display: flex;
    padding: 0;
    margin: 0;
  }
  .example-pagination-block + .example-pagination-block {
    margin-top: 10px;
  }
  .col{
      margin: 3vh;
      margin-right: 0vh;
  }
  .bu{
    position: fixed;
    bottom: 2vh;
    left: 45%;
  }
  .example-pagination-block {
    margin-bottom: 16px;
  }
  .ccc{
    height: 100%;
  }
  .head{
      border: 0px solid rgb(151, 231, 58);
      margin: 0;
      
  }
  .main{
      border: 0px solid red;
      height: 100%;
  }
  #span{
             white-space: nowrap;
             text-overflow: ellipsis; /* 溢出显示省略号 */
             overflow: hidden; /* 溢出隐藏 */
  }
  .title{
      display: flex;
      position: relative;
      top: 15%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit:fill;
    padding: 0;
    margin: 0;
  }
  .buttonp{
    position: relative;
    right: 0%;
  }
  .ddd{
  background-color: rgba(255, 255, 255,0.7);
  }
  </style>