<template>
    <div class="details-box">
    <h4 class="title">{{ data.title }}</h4>
    <div class="time">
      <span>发布时间：{{ data.createTime }}</span>
      <span style="margin-left: 50px;">最近修改时间：{{ data.updateTime }}</span>
      <div class="item-style">
        <el-button type="danger" @click="addShopcartClick" v-if="data.type == 'goods'">加入购物车</el-button>
        <el-popover placement="right" width="320" trigger="hover">
          <div>
            <div class="item-sales">买家姓名：<span class="sales-text">{{data.ownName}}</span></div>
            <div class="item-sales">买家地址：<span class="sales-text">{{data.address}}</span></div>
            <div class="item-sales">更新时间：<span class="sales-text">{{data.updateTime | formatTimer}}</span></div>
          </div>
          <div style="color:#fc7373;margin-left:50px;cursor:pointer;display: flex;" slot="reference" @click="changeInfo" v-show="data.type == 'needs'">
            <div style="margin-right:10px;color:#fff;font-weight:bold;background: #fc7373;width: 20px;height: 20px;border-radius: 10px;text-align: center;">!</div>
            买家信息
          </div>
        </el-popover>
      </div>
    </div>
    <img :src="data.picture" alt="" />
    <div class="info">
      <div class="content" :title="data.content">{{ data.content }}</div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
    import {useStore} from '@/stores/index'
    import type { Good } from '@/dataource/Types';
    const store = useStore()
    let data = {} as Good
    data = store.sgoods.find(g=>g.orderId == store.detailid) as Good
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