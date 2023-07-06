<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-menu-item index="0">
            我的购物车
          </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="1">
            总价：{{ cartStore.tMoney }}
          </el-menu-item>
          <el-menu-item index="2">
            <el-button @click="commit()" size="large" type="success" round>提交订单</el-button>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <!-- <el-checkbox-group v-model="cartStore.choosedCart"> -->
          <el-table  :data="cartStore.myCart" style="width: 100%" stripe="true">
          <el-table-column prop="picture" label="图片" width="200" >
            <template #default="{row}">
              <img :src="row.picture">
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" width="200" />
          <el-table-column prop="content" label="内容" width="200" />
          <el-table-column prop="price" label="单价" width="200" />
          <el-table-column label="修改数量" width="200px" >
            <template #default="{row}">
              <el-input-number size="small" v-model="row.count" :min="1" :max="10" @change="handleChange(row.shoppingId,row.count)" />
            </template>
          </el-table-column>
          <el-table-column label="选择" width="150px">
            <template #default="{row}">
              <el-checkbox  @change="choose(row)" label="选择"  border="true" />
            </template>
          </el-table-column>
          <el-table-column label="移除" width="100px">
            <template #default="{row}">
              <el-popconfirm
              confirm-button-text="确定"
              cancel-button-text="取消"
              title="确定移除?"
              @confirm="confirmEvent(row.shoppingId)"
            >
              <template #reference>
                  <el-icon size="30px" color="#F56C6C"><DeleteFilled /></el-icon>
              </template>
            </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- </el-checkbox-group> -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";
import type { cartInfo } from '@/dataource/Types';
import { ref } from "vue";
  

  const cartStore = useCartStore()
  // 页面刷新的时候查询所有的购物车数据
  onMounted(() => cartStore.checkCart())

  // 点击数量控制组件触发
  const handleChange = (shoppingId:number,count:number) => {
    cartStore.updateCart(shoppingId,count)
  }

  // 确定删除时调用
  const confirmEvent = (shoppingId:number) => {

    cartStore.deleteCart(shoppingId)

  }

  // 选择时调用
  const choose = (shopping : cartInfo) => {
  let flag = false
  cartStore.choosedCart.forEach(element => {
    if(element.orderId == shopping.orderId){
      flag = true;
    }
  })
  if (flag == false){
    cartStore.choose(shopping)
  }else{
    cartStore.unChoose(shopping.shoppingId)
  }
} 
// 提交
const commit = () => {
  cartStore.commit()
}
</script>