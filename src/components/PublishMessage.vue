<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
  <el-form-item label="picture" prop="picture">
    <el-input v-model="ruleForm.picture" />
    </el-form-item>
    <el-form-item label="type">
      <el-select v-model="ruleForm.type" placeholder="please select your type">
        <el-option label="商品" value="goods" />
        <el-option label="需求" value="needs" />
      </el-select>
    </el-form-item>
    <el-form-item label="statu">
      <el-select v-model="ruleForm. orderStatu" placeholder="please select your statu">
        <el-option label="0" value=0 />
        <el-option label="1" value=1 />
      </el-select>
    </el-form-item>
    <el-form-item label="title" prop="title">
      <el-input v-model="ruleForm.title" />
    </el-form-item>
    <el-form-item label="price" prop="price">
      <el-input v-model="ruleForm.price" />
    </el-form-item>
   
    <el-form-item label="content" prop="content">
      <el-input v-model="ruleForm.content" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">
       submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import {useStore} from '@/stores/index'
const upload = ref<UploadInstance>()
const store = useStore()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}


interface RuleForm {
  type:string
  orderStatu:number
  picture:string
  title: string
  price:number
  content: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  type:"",
  orderStatu:0,
  title: '标题',
  price: 0,
  content: '',
  picture:"输入图片链接"
})

const rules = reactive<FormRules<RuleForm>>({
  type: [
    { required: true, message: 'Please input type', trigger: 'blur' },

  ],
  orderStatu: [
    { required: true, message: 'Please input statu', trigger: 'blur' },

  ],

  picture: [
    { required: true, message: 'Please input picture', trigger: 'blur' },

  ],
  title: [
    { required: true, message: 'Please input title', trigger: 'blur' },

  ],
   price: [
    {

      required: true,
      message: 'Please select price',
      trigger: 'blur',
    },
  ],
  content: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = () => {
      store.addPublicPG(ruleForm)
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>