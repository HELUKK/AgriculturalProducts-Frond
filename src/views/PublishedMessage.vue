<template>
    <el-button type="success" @click="publishClick" style="margin: 10px 20px"
       >发布商品</el-button >
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        width: 900px;
        padding: 10px 20px;
      "
    >
    <div class="example-pagination-block" >
            <el-row >
            <el-col
              v-for="(o, index) in store.goods"
              :key="o"
              :span="5"
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
            <el-button type="success" @click="handleClick(o.orderId ,ch)" round>修改</el-button>
            <el-button type="success"  @click="handleClick(o.orderId,de)"  round>删除</el-button>
          </div>
        </div>
        </el-card>
         </el-col>
         </el-row> 
          <el-pagination class="bu" layout="prev, pager, next" v-model:current-page="page" :total="store.gtotal"  />
          </div>   
          <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <span>确定{{type}}该{{$route.meta.type}} ?</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="excute" >
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>  
  </div>
</template>

<script  lang="ts" setup>
import { onMounted, ref, watch } from 'vue'; 
import {useStore} from '@/stores/index'
import router from '@/router';
import { ElMessageBox } from 'element-plus'
  let dialogVisible = ref(false)
  const ch = "修改" as string
  const de = "删除" as string
  let type = ""
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }
const page = ref(1)
const store = useStore()
let id = 0
const handleClick = (nid:number,ntype:string) =>{
     dialogVisible.value = true
     id=nid
     type=ntype
}
const publishClick= () =>{
   router.push("/handlePG")
}
const excute = () =>{
    if(type == ch){
     store.updateMyg(id)
    }
    else if(type == de){
      store.deleMygoods(id)
    }
    dialogVisible.value = false
}
watch(page,(newValue,oldValue)=>{
       store.loadMygoods(newValue);
})
onMounted(()=>{

  store.loadMygoods(page.value)
})
</script>

<style lang="less" scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
  }
.bu{
  position: fixed;
  bottom: 10vh;
  right: 45vw;
}
.search {
  height: 60px;
  background-color: white;
  padding: 10px 20px;
  background-color: white;
  margin-top: 10px;
  .search-icon {
    position: relative;
    bottom: 2px;
    left: -2px;
    cursor: pointer;
  }
}
.published-message {
  width: 900px;
  margin: 0 auto;
  height: 100%;
  background: #fff;

  .message {
    box-sizing: border-box;
    width: 410px;
    height: 180px;
    border: 1px solid #f2f2f2;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 20px 10px 0;
    background: #fff;
    // padding: 10px 20px;
    img {
      width: 200px;
      height: 180px;
      margin-right: 10px;
      border-radius: 6px;
    }
    .info {
      margin-top: 10px;
      .item-style {
        height: 20px;
        line-height: 20px;
      }
      .initiator {
        color: #666;
      }
      .title {
        font-size: 16px;
        height: 30px;
        /*超出的部分隐藏*/
        overflow: hidden;
        /*文字用省略号替代超出的部分*/
        text-overflow: ellipsis;
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示文本的行数*/
        -webkit-line-clamp: 3;
        /*设置或检索伸缩盒对象的子元素排列方式*/
        -webkit-box-orient: vertical;
      }
      .content {
        width: 170px;
        line-height: 20px;
        max-height: 80px !important;
        margin-top: 10px;
        word-break: break-all;
        /*超出的部分隐藏*/
        overflow: hidden;
        /*文字用省略号替代超出的部分*/
        text-overflow: ellipsis;
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示文本的行数*/
        -webkit-line-clamp: 3;
        /*设置或检索伸缩盒对象的子元素排列方式*/
        -webkit-box-orient: vertical;
      }
      .price {
        font-size: 16px;
        font-weight: bold;
        display: block;
        color: red;
      }
    }
  }
  .published-message-operation {
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}
.search /deep/ .el-input--suffix .el-input__inner {
  height: 35px;
  line-height: 35px;
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