<template>
    <el-dialog v-model="dialogVisible" title="作物信息" width="600px">
      <el-form label-width="100px">
        <el-form-item label="作物名称：">
          <el-input v-bind:disabled="flag" placeholder="请输入作物名称" v-model="from.plantName"/>
        </el-form-item>
        <el-form-item label="作物条件：">
          <el-input v-bind:disabled="flag" placeholder="请输入作物条件" v-model="from.plantCondition"/>
        </el-form-item>
        <el-form-item label="土壤条件：">
          <el-input v-bind:disabled="flag" placeholder="请输入土壤条件" v-model="from.soilCondition"/>
        </el-form-item>
        <el-form-item label="面积：">
          <el-input v-bind:disabled="flag" placeholder="请输入面积" v-model="from.area"/>
        </el-form-item>
        <el-form-item label="回答：">
          <el-input type="textarea" v-bind:disabled="!flag" placeholder="请输入回答" v-model="from.answer"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onUpdata">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
<script lang="ts" setup>
// TODO: 编辑
import { ref } from 'vue'
import type {Question,Reserve} from '@/dataource/Types'
import {userStore} from '@/stores/user'
import {USER,EXPERT,ADMIN} from '@/dataource/UserType'
import {useStore} from '@/stores/index';
const usestore=useStore()
const fromf:Reserve={
    address:' ',
    plantName:' ',
    soilCondition:' ',
    plantDetail:' ',
}

  const index2=ref(0)
  const from = ref(fromf)
// 弹框开关
const dialogVisible = ref(false)
const flag=usestore.user.role=='user'
const open = (row:Reserve,index:number)=>{
  //打开弹框
  dialogVisible.value = true
    from.value.plantName=row.plantName
    from.value.plantCondition=row.plantCondition
    from.value.soilCondition=row.soilCondition
    from.value.area=row.area
    from.value.answer=row.answer
  index2.value=index
}

defineExpose({
  open
})

const emit = defineEmits(['on-updata'])

const user = userStore()
//点击更新按钮,更新数据,关闭弹窗通知父页面更新列表数据
const onUpdata = async()=>{
  usestore.reserves[index2.value].plantName=from.value.plantName
  usestore.reserves[index2.value].plantCondition=from.value.plantCondition
  usestore.reserves[index2.value].soilCondition=from.value.soilCondition
  usestore.reserves[index2.value].area=from.value.area
  usestore.reserves[index2.value].answer=from.value.answer
  dialogVisible.value = false
  emit('on-updata')
}
</script>

<style scoped>
.el-input {
  width: 290px;
}
</style>
