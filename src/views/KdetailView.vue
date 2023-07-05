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
    <div>
    <el-input type="textarea"  :rows="4"></el-input>
  </div>
    <!-- 
    <div style="margin-top:20px;display: flex;flex-direction: row;justify-content: flex-end">
      <el-button type="success" @click="handleComment">添加评论</el-button>
    </div>
    <div class="comment-container">
      <div class="comment-num">评论共{{commentArray.length||0}}条</div>
      <div class="comment-item" v-for="(item,index) in commentArray" :key="index">
        <div>{{item.content}}</div>
        <div class="comment-tips">
          <div style="margin-right:40px;">评论人：<span class="color6">{{item.ownName}}</span></div>
          <div>评论时间：<span class="color6">{{item.createTime|formatTimer2}}</span></div>
        </div>
      </div>
    </div>
  <!- </div>  -->
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import type { Know } from '@/dataource/Types';
import { ref } from 'vue';

const store = useStore()
const data = ref<Know>()
data.value = store.knows.find(g=>g.knowledgeId == store.detailid)
console.log("good调用"+data.value?.ownName)
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