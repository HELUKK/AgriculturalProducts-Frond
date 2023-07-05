<template>
  <div class="search">
  <el-input v-model="searchValue"  maxlength="100" placeholder="搜索" clearable style="width:290px;"/>
  <img src="../assets/img/search.png" class="search-icon"  @click="handleSearch"/>
  <i style="color:#696969;font-size:12px;font-style:normal;">热门搜索：
    <RouterLink to="guidance" class="tag-item" @click="handleTopicDetail('苹果果树种植方法')">苹果果树种植方法 </RouterLink> <RouterLink to="guidance" class="tag-item" @click="handleTopicDetail('新疆哈密瓜甜度控制')">新疆哈密瓜甜度控制</RouterLink> <RouterLink to="guidance" class="tag-item" @click="handleTopicDetail('玉米苗灌溉')">玉米苗灌溉</RouterLink>
  </i>
</div>
   <div class="all" >
            <el-row >
            <el-col
              v-for="(q, index) in store.questions"
              :key="index"
              :offset="index > 0 ? 2 : 0"
              class="col"
            >
           <div class="wen">
           [问]<RouterLink to="/">{{ q.question }}</RouterLink>
          </div>
         
         </el-col>
         </el-row> 
          <el-pagination class="bu" layout="prev, pager, next" v-model:current-page="page" :total="store.qtotal"  />
          </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue'
import {useStore} from '@/stores/index'

const searchValue = ref("") 
const store = useStore();
const page  = ref(store.page) 

    const getData = (s:string)=>{
     store.selectQuestions({
        pageNum: store.page,
        keys:s
      })
    }
    const handleSearch = ()=>{
        getData(searchValue.value)
    }
   const handleDetail=(id:number)=>{
      
    }
   const handleTopicDetail=(s:string)=>{
     getData(s)
    }
    
 onMounted(()=>{
   store.loadQuestions(1)
 })
watch(page,(newValue,oldValue)=>{
       store.loadQuestions(newValue);
})
</script>

<style scoped>
img{
  height: 30px;
  margin-right: 3px;
}
.search{
  position: absolute;
  top: 10vh;
  left: 15vw;
}
 .search-icon{
    position:relative;
    top:11px;
    left: 0px;
  }
.bu{
  position: fixed;
  bottom: 33vh;
  left: 36vw;
}
.col{
  margin: 0;
}
.all{
    display: flex;
    width: 50vw;
    height: 30vh;
    position: absolute;
    top: 17vh;
    left: 15vw;
}
.wen{
  margin: 2px;
  border: 0px solid red;
  background-color: rgba(60, 204, 237,0.1);
  padding: 10px;
}

</style>
