<template>
  <div ref="detectRef" class="gesture-area">
    手势触发区域
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import FSTouch from '@touch-fusion/lib';
import { ElMessage } from 'element-plus';

const detectRef = ref(null)
// 禁用右键菜单
document.oncontextmenu = () => false

onMounted(() => {
  const manager = new FSTouch.Core.Manager(detectRef.value!, {
    preventDefault: true
  })
  const recognizer = new FSTouch.Core.Recognizer.PressRecognizer({
    threshold: 20,
    time: 1000
  })
  manager.add(recognizer)
  manager.on(FSTouch.Constants.RECOGNIZER_TYPE.Press, (e) => {
    console.log(e.type, e)
    ElMessage.success('检测到长按手势触发了！')
  })
})
</script>
