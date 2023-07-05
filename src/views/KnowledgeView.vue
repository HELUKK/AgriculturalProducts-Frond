<template>
    <div class="common-layout">
      <el-container class="ccc">
        <el-header class="head">
            <div class="title">
            <el-icon size="30px" id="ic" color="rgb(151, 231, 58)" ><ShoppingCart /></el-icon>
            <h2 id="h">农业知识界面</h2>
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
  </template>

  
  <script lang="ts" setup>
  import {  onMounted, ref, watch } from 'vue'
  import {useStore} from '@/stores/index';
    
  const store = useStore();
  const page = ref(store.page)
  const currentDate = ref(new Date())
  watch(page,(newValue,oldValue)=>{
        store.loadKnow(newValue);
  })
  onMounted(()=>{
    store.loadKnow(1);
  })

  const kdetail = (id:number) =>{
    console.log("kdetail调用")
    store.kdetail(id);

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
  </style>