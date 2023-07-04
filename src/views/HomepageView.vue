<template>
    <div class="common-layout">
      <el-container class="ccc">
        <el-header class="head">
            <div class="title">
            <el-icon size="30px" id="ic" color="rgb(151, 231, 58)" ><ShoppingCart /></el-icon>
            <h2 id="h">农产品购物界面</h2>
        </div>
        <span class="search">
            <el-icon class="ss"><Search /></el-icon>
            <input type="text" placeholder="搜索商品" />
        </span>
        </el-header>
        <!-- main -->
        <el-main class="main">
          <!-- 分页 -->
          <div class="example-pagination-block" >
            <el-row >
            <el-col
              v-for="(o, index) in store.goods"
              :key="o"
              :span="4"
              :offset="index > 0 ? 2 : 0"
              class="col"
            >
            <el-card :body-style="{ padding: '0px', margin:'5px' }">
            <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            />
            <div style="padding: 0px">
            <span id="span">{{ o.title + "￥:"+o.price }}</span>
            <div class="bottom">
            <el-button text class="button"  @click="detail(o.orderId)">详情</el-button>
          </div>
        </div>
        </el-card>
         </el-col>
         </el-row> 
          <el-pagination class="bu" layout="prev, pager, next" v-model:current-page="page" :total="store.gtotal"  />
          </div>
          <!-- 分页 -->
        </el-main>
      </el-container>
    </div>
  </template>



<script lang="ts" setup>
import {  onMounted, ref, watch } from 'vue'
import {useStore} from '@/stores/index';
import router from '@/router';
  
const store = useStore();
const detail = (id:number)=>{
  console.log("detai2调用")
     store.detail(id);
}
const page = ref(store.page)
console.log(page);
const currentDate = ref(new Date())
watch(page,(newValue,oldValue)=>{
       console.log(page)
       store.loadGoods(newValue);
})
onMounted(()=>{
  store.loadGoods(1)
})
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.col{
    margin: 5px;
    margin-right: 3vh;
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
            /* 2.溢出的部分隐藏起来 */
            overflow: hidden;
            /* 3.文字溢出的时候用省略号来显示 */
            text-overflow: ellipsis;
}
.title{
    display: flex;
    position: relative;
    top: 15%;
}
.search{
   display: flex;
   height: 25px;
   position: absolute;
   top: 14vh;
   left: 155vh;
}
input{
   border-radius: 50px;
}
.ss{
    position: relative;
    left: 85%;
    top: 28%;
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
</style>
  