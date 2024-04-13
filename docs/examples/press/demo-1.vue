<template>
  <div ref="detectRef" class="gesture-area">
    手势触发区域
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FsTouchManager, FsTouchRecognizer } from 'touch-fusion';
import { ElMessage } from 'element-plus';

const detectRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  // 禁用右键菜单
  detectRef.value!.oncontextmenu = () => false
  const manager = new FsTouchManager(detectRef.value!, {
    preventDefault: true
  })
  const recognizer = new FsTouchRecognizer.PressRecognizer({
    threshold: 20,
    time: 1000
  })
  manager.add(recognizer)
  manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Press, (e) => {
    console.log(e.type, e)
    ElMessage.success('检测到长按手势触发了！')
  })
})
</script>
