<template>
  <div class="appointment-container">
    <el-form   :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
      <el-form-item label="地址" prop="address">
        <el-input v-model="address" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="种植作物" prop="plantName">
        <el-input v-model="plantName" placeholder="请输入种植的作物"></el-input>
      </el-form-item>
      <el-form-item label="作物详细信息" prop="plantDetail">
        <el-input v-model="plantDetail" placeholder="请输入作物详细信息"></el-input>
      </el-form-item>
      <el-form-item label="作物条件" prop="plantCondition">
        <el-input v-model="plantCondition" placeholder="请输入作物生长状况"></el-input>
      </el-form-item>
      <el-form-item label="土壤条件" prop="soilCondition">
        <el-input v-model="soilCondition" placeholder="请输入土壤状况"></el-input>
      </el-form-item>
      <el-form-item label="面积" prop="area">
        <el-input v-model="area" placeholder="请输入面积"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="phone" placeholder="请输入电话"></el-input>
      </el-form-item>
      
      <el-form-item style="float:right;">
        <el-button type="success" @click="onSubmit">去预约</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useStore} from "@/stores/index"
const store = useStore()
 const address = ref("")
 const plantName = ref("")
 const plantDetail = ref("")
 const plantCondition = ref("")
 const soilCondition = ref("")
 const area = ref("")
 const phone = ref("")
 const rules = ref({ phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
        soilCondition: [{ required: true, message: '请输入土壤状况', trigger: 'blur' }],
        plantCondition: [{ required: true, message: '请输入作物生长状况', trigger: 'blur' }],
        plantDetail: [{ required: true, message: '请输入作物详细信息', trigger: 'blur' }],
        plantName: [{ required: true, message: '请输入种植的作物', trigger: 'blur' }],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        area: [{ required: true, message: '请输入面积', trigger: 'blur' }],})
  const onSubmit = ()=>{
    store.addAppoint({
        phone:phone.value,
        soilCondition:soilCondition.value,
        plantCondition:plantCondition.value,
        plantDetail:plantDetail.value,
        plantName:plantName.value,
        address:address.value,
        area:area.value,
        status:0,
        expertName:store.ename,
    })
  }
</script>

<style lang="less" scoped>
.appointment-container{
  width: 1000px;
  height: 100%;
  background: #fff;
  margin: 10px auto;
  padding: 10px 20px;
}
</style>