<template>
    <div class="details-box">
      <img v-if="data?.picture" :src="data.picture" alt="" />
      <img v-else src="../assets/img/wutu.gif" alt="" style="border:1px solid #f2f2f2;"/>
      <div class="info">
        <h4 class="title">{{ data.title }}</h4>
        <div class="content" :title="data.content">{{ data.content }}</div>
        <div class="time">
          <span style="margin-right:30px;">发布时间：{{ data.createTime}}</span>
          <span>最近修改时间：{{ data.updateTime}}</span>
        </div>
        <div class="item-style">
          <div class="btn-content">
            <el-tooltip :visible="visible">
             <template #content>
              <div>
              <div class="item-sales">卖家姓名：<span class="sales-text">{{data.ownName}}</span></div>
              <div class="item-sales">卖家地址：<span class="sales-text">{{data.address}}</span></div>
              <div class="item-sales">卖家手机号码：<span class="sales-text">1582553382</span></div>
              <div class="item-sales">更新时间：<span class="sales-text">{{data.createTime}}</span></div>
            </div>
            </template>
            <el-button type="danger" @click="visible=!visible">
                    卖家信息
            </el-button>
         </el-tooltip>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
    import {useStore} from '@/stores/index'
    import type { Good } from '@/dataource/Types';
    import { ref } from 'vue'
    const store = useStore()
    const visible = ref(false)
    let data = {} as Good
    data = store.sgoods.find(g=>g.orderId == store.detailid) as Good
</script>
  
<style lang="less" scoped>
.details-box {
  width: 1100px;
  height: 100%;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  img {
    width: 360px;
    height: 300px;
    border-radius: 6px;
  }
  .info {
    position: relative;
    width: 680px;
    height: 300px;
    border: 1px solid #f2f2f2;
    // box-shadow: 3px 3px 3px rgba(3, 0, 0, 0.07);
    border-radius: 6px;
    padding: 10px 20px;
    .title {
      font-size: 22px;
      font-weight: bold;
    }
    .content {
      height: 100px;
      border: 1px dashed #f2f2f2;
      line-height: 23px;
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
    .price {
      color: red;
      font-size: 25px;
      font-weight: bold;
    }
    .time {
      margin-top: 5px;
      color: #999;
      display: flex;
      justify-content: flex-start;
    }
    .item-style{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 5px;
      align-items: center;
    }
  }
  .operation {
    display: flex;
    margin-top: 10px;
    margin-right: 150px;
    .operation-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      .operation-img{
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
        border-radius: 6px;
      }
    }
  }
  .btn-content{
    margin-top: 10px;
  }
  .item-sales{
    color: #333 !important;
    line-height: 30px;
    max-height: 30px;
    .sales-text{
      color: #666;
    }
  }
}
</style>