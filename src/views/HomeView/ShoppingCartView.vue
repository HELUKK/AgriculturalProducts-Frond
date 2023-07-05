<template>
    <div class="common-layout">
      <el-container class="ccc">
        <el-header class="head">
            <el-row>
              <el-col :span="12">
                <div class="title">
                <el-icon size="30px" id="ic" color="rgb(151, 231, 58)" ><ShoppingCart /></el-icon>
                <h2 id="h">购物车界面</h2>
                </div>
              </el-col>
              <el-col :span="12">
                <h2>
                  总价：{{ cartStore.tMoney }}
                </h2>
              </el-col>
            </el-row>
            
        </el-header>
        <!-- main -->
        <el-main class="main">
          <!-- 分页 -->
          <div class="example-pagination-block" >
            <el-row >
            <el-col
              v-for="(o, index) in cartStore.myCart"
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
                <el-button text class="button"  @click="deleteCart(o?.shoppingId)">删除</el-button>
                <el-checkbox  label="选择" size="small" @change="choose(o)" />
                <el-input-number size="small" v-model="o.count" :min="1" :max="10" @change="handleChange(o.shoppingId,o.count)" />
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
import { useCartStore } from '@/stores/cart';
import router from '@/router';
import type { cartInfo } from '@/dataource/Types';
  
const count = ref(1);
const store = useStore();
const cartStore = useCartStore()

console.log(cartStore.myCart)



const deleteCart = (id:number)=>{
  cartStore.deleteCart(id)
}

const handleChange = (shoppingId:number,count:number) => {
  cartStore.updateCart(shoppingId,count);
}

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
    cartStore.unChoose(shopping)
  }
}

const page = ref(store.page)
console.log(page);

watch(page,(newValue,oldValue)=>{
       console.log(page)
       store.loadGoods(newValue);
})



onMounted(()=>{
  store.loadGoods(1)
})
onMounted(() => {
  cartStore.checkCart()
})



</script>
<style scoped>
.flex-grow{
  flex-grow: 1;
}

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
  