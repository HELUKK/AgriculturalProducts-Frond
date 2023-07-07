<template>
  <div class="knowlege-detail-container">
    <div class="title">{{ data?.title }}</div>
    <div class="tips">
      <span>作者：</span>
      <span style="margin-right:20px;">{{data?.ownName}}</span>
      <span>日期：</span>
      <span>{{data?.updateTime}}</span>
      </div>
    <div class="detail-img">
      <!-- <video v-if="updateInfo.type==='mp4'||updateInfo.type==='MP4'" id="video" width="900" height="360" :src="$store.state.imgShowRoad + '/file/' + updateInfo.picPath" controls> </video> -->
      <img  style="width:400px;height:300px;" :src="data?.picPath" alt="" />
    </div>
    <div class="detail-content">
      <div>{{data?.content}}</div>
    </div>
    <el-popover :visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" text @click="visible = false">cancel</el-button>
      <el-button size="small" type="primary" @click="deleteKnow()"
        >confirm</el-button
      >
    </div>
    <template #reference>
      <el-button @click="visible = true">Delete</el-button>
    </template>
  </el-popover>
    <div style="margin-top:20px">
    <el-input type="textarea" v-model="content" :rows="4"></el-input>
  </div>

    <div style="margin-top:20px;display: flex;flex-direction: row;justify-content: flex-end">
      <el-button type="success" @click="addCon()">添加评论</el-button>
    </div>
    <div class="comment-container">
      <div class="comment-num">评论共{{store.discuss.length||0}}条</div>
      <div class="comment-item" v-for="(item,index) in store.discuss" :key="index">
        <div>{{item.content}}</div>
        <div class="comment-tips">
          <div style="margin-right:40px;">评论人：<span class="color6">{{item.ownName}}</span></div>
          <div>评论时间：<span class="color6">{{item.createTime}}</span></div>
        </div>
      </div>
    </div>
</div>  
</template>

<script setup lang="ts">
import { useknowStore } from '@/stores/know';
import type { Discuss,  Know } from '@/dataource/Types';
import { ref } from 'vue';
import  { ElMessageBox } from "element-plus"
import { useStore } from '@/stores';


const store = useknowStore()
const store1 = useStore()
const visible = ref(false)
const data = ref<Know>()
const content = ref('')
const discusslist = ref<Discuss[]>([])
data.value = store.knows.find(g=>g.knowledgeId == store.detailid)
console.log("knowid"+data.value?.knowledgeId)
console.log("detailId"+store.detailid)
store.loadDis(store.detailid)
discusslist.value = store.discuss
const addCon = () =>{
  if(content.value == ''){
    ElMessageBox.confirm("内容不能为空");
  }
  else{
  store.addDiscuss(store.detailid,content.value)
  ElMessageBox.confirm("评论发布成功");
  }
}
const deleteKnow = () =>{
  
  store.deleteKnow(store.detailid)
  visible.value = false
}
content.value =''
</script>
<style scoped>
.knowlege-detail-container{
  width: 1100px;
  margin: 0 auto;
  background: #fff;
  min-height: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  .title{
    font-size: 2pc;
    text-align: center;
  }
  .tips{
    margin-top: 10;
    color: #999;
    display: flex;
    justify-content: flex-end;
    height: 30px;
    align-items: center;
  }
  .detail-content{
    margin-bottom: 50px;
}
  .detail-img{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    img{
      border-radius: 6px;
    }
  }
  .comment-container{
    clear: both;
    margin-top: 10px;
    .comment-num{
      font-weight: bold;
    }
    .comment-item{
      border-bottom: 1px solid #f2f2f2;
      padding: 10px 20px;
      margin: 20px 0;
      word-break: break-all;
      .comment-tips{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        .color6{
          color: #666;
        }
      }
    }
  }
}
</style>