<script lang="ts">
 import { ElMessage,ElMessageBox } from 'element-plus'
 import type { Action } from 'element-plus'
 export  const open = (message:string) => {
  ElMessageBox.alert(message, '提示', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>