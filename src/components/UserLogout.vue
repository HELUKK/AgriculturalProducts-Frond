<template>
     <el-button  style="text-align: center;" size="large" @click="open">登出</el-button>
</template>
<script lang="ts" setup>
import router from '@/router';
import { getCurrentInstance } from 'vue'
import { ElMessageBox,ElMessage} from 'element-plus'

const { appContext } = getCurrentInstance()!

const open = () => {
  ElMessageBox.confirm(
    '你即将登出系统，继续操作?',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      router.push("/login")
       ElMessage({
        type: 'success',
        message: `退出成功`,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出',
      })
    })
}
</script>