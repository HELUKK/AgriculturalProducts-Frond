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
              <el-input v-model="key" size="small" placeholder="请输入搜索内容" />
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
              <div class="imgbox">
            <img
            :src="o.picture"
            class="image"
            />
          </div>
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
const key=ref('')
const page = ref(store.page)
console.log(page);
const currentDate = ref(new Date())
watch(page,(newValue,oldValue)=>{
       console.log(page)
       store.loadGoods(newValue);
})

watch([page,key],(newValue,oldValue)=>{
     console.log(newValue)
     //查询条件不为空--条件搜索
    if(newValue[1].length!=0 )
    {
      store.searchgoods(newValue[1],newValue[0])
      console.log('查询'+newValue[0]+' '+newValue[1])
    }
    //查询条件为空--读取
    else{
      store.loadGoods(newValue[0])
    }

    
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
.imgbox{
    width: 346px;
	  height: 200px;
    display: flex;
    padding: 0;
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
img{
    width: 100%;
    height: 100%;
    object-fit:fill;
    padding: 0;
    margin: 0;
  }
</style>
  