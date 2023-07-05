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
        <div >
          <el-pagination  style="justify-content: center;" layout="prev, pager, next" v-model:current-page="page" :total="store.stotal"  />
        </div>
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
<style lang="less" scoped>
.details-box {
  left: 0%;
  height: auto;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  // align-items: center;
  img {
    width: 360px;
    height: 300px;
    margin: 50px auto 20px;
    border-radius: 6px;
  }
  .title {
    
    font-weight: bold;
    
    max-height: 70px;
    text-align: center;
    margin-bottom: 20px;
  }
  .time {
    margin-top: 5px;
    color: #999;
    display: flex;
    justify-content: flex-end;
  }
  .info {
    width: 100%;
    min-height: 300px;
    border-radius: 6px;
    padding: 10px 20px;
    margin: 0 auto;
    display: flex;
    align-content: center;
    justify-content: center;
    .content {
      min-height: 100px;
      // border: 1px dashed #f2f2f2;
      
      padding: 5px 10px;
      /*超出的部分隐藏*/
      overflow: hidden;
      /*文字用省略号替代超出的部分*/
      text-overflow: ellipsis;
      /*弹性伸缩盒子模型显示*/
      display: -webkit-box;
      /*限制在一个块元素显示文本的行数*/
      -webkit-line-clamp: 4;
      /*设置或检索伸缩盒对象的子元素排列方式*/
      -webkit-box-orient: vertical;
    }
    .item-style{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 5px;
    }
  }
  .item-sales{
    color: #333 !important;
    
    max-height: 30px;
    .sales-text{
      color: #666;
    }
  }
  

}
</style>