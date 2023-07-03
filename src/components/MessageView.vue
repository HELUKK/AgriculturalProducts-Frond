<script lang="ts">
 import { ElMessage,ElMessageBox } from 'element-plus'
 import type { Action } from 'element-plus'
 export  const open = (message:string) => {
  ElMessageBox.confirm(message,
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'success',
    }
  )
    .then(() => {
       ElMessage({
        type: 'success',
        message: `操作成功`,
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