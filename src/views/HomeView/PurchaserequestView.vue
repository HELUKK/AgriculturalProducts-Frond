<template>
  <el-table :data="store.sgoods" style="width: 100%">
  <el-table-column label="标题" prop="title" />
  <el-table-column label="内容" prop="content" />
  <el-table-column label="时间" prop="updateTime" />
  <el-table-column align="right">
    <template #header>
      <el-input v-model="search" size="small" placeholder="Type to search" />
    </template>
    <template #default="scope">

      <el-button round @click="todetail(scope.$index, scope.row)">详情</el-button>
    </template>
    
  </el-table-column>
</el-table>

  <div class="example-pagination-block" >
          <el-row >
          <el-col
            v-for="(o, index) in store.goods"
            :key="o"
            :span="4"
            :offset="index > 0 ? 2 : 0"
            class="col"
          >
       </el-col>
       </el-row> 
        <el-pagination class="bu" layout="prev, pager, next" v-model:current-page="page" :total="store.stotal"  />
        </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'
import {useStore} from '@/stores/index';
import {  onMounted, watch,ref } from 'vue'
import router from '@/router';
import type { Good } from '@/dataource/Types';


const search = ref('')
const store=useStore()


const page = ref(store.page)
watch(page,(newValue,oldValue)=>{
     console.log(page)
     store.loadNeeds(newValue);
})

  const todetail=(index:number,row:Good)=>{
    store.todetail(row.orderId)
  }

onMounted(()=>{
store.loadNeeds(1)
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
  