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
           [问]<RouterLink to="quesd" @click="qid(q.id)">{{ q.question }}</RouterLink>
          <hr/>
          </div>
         
         </el-col>
         </el-row> 
          <el-pagination class="bu" layout="prev, pager, next" v-model:current-page="page" :total="store.qtotal"  />
          </div>
        <span class="eeh"><h3>专家列表</h3></span>
     <div class="experts">
               <el-carousel
                height="220px"
                direction="vertical"
                 type="card"
                :autoplay="true"
                >
               <el-carousel-item v-for="(e,index) in store.experts" :key="index">
                
                <el-descriptions title="专家信息">
                 <el-descriptions-item label="名字">{{ e.realName }}</el-descriptions-item>
                 <el-descriptions-item label="电话">{{ e.phone }}</el-descriptions-item>
                 <el-descriptions-item label="职称">{{ e.position }}</el-descriptions-item>
                 <el-descriptions-item label="所属">{{  e.belong }}</el-descriptions-item>
                 <el-descriptions-item label="执行:">
                 <el-tag size="small" @click="handleQ(e.realName)">向我提问</el-tag>
                 <el-tag size="small" @click="handleA(e.realName)">线下预约</el-tag>
                 </el-descriptions-item>
                 </el-descriptions>
               
               </el-carousel-item>
               </el-carousel>
              </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue'
import {useStore} from '@/stores/index'
import router from '@/router';
const searchValue = ref("") 
const store = useStore();
const page  = ref(store.page) 
const handleQ = (name:string)=>{
    store.ename = name
    router.push('handleq')
}
const handleA = (name:string)=>{
    store.ename = name
    router.push("handlea")
}
const qid = (id:number)=>{
    store.findQ(id)
}
    const getData = (s:string)=>{
     store.selectQuestions({
        pageNum: store.page,
        keys:s
      })
    }
    const handleSearch = ()=>{
        getData(searchValue.value)
    }
   const handleTopicDetail=(s:string)=>{
     getData(s)
    }
    
 onMounted(()=>{
   store.loadQuestions(1)
   store.loadExperts()
 })
watch(page,(newValue,oldValue)=>{
       store.loadQuestions(newValue);
})
</script>

<style scoped>
.eeh{
  display: flex;
  border: 0px solid red;
  position: absolute;
  right: 4vw;
  top: 10vh;
  width: 28vw;
  background-color: rgba(60, 204, 237,0.1);
  justify-content: center;
   align-items: center;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.3;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.experts{
  border: 0px solid red;
  margin: 0; padding: 0;
  width: 28vw;
  height: 50vh;
  position: absolute;
  right: 4vw;
  top:22vh;
  /* background-color: rgba(60, 204, 237,0.1); */
}


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
  bottom: 15vh;
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
  /* background-color: rgba(60, 204, 237,0.1); */
  padding: 10px;
}
</style>
