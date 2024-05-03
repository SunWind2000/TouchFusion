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
const lastScale = ref(1)
const messageInstance = ref([])

onMounted(() => {
  const manager = new FsTouchManager(detectRef.value!)
  manager.on(FsTouchRecognizer.RECOGNIZER_TYPE.Rotate, (e) => {
    if (e.rotation.toFixed(2) !== '0.00') {
      const ins = ElMessage.success({
        message: `旋转角度：${e.rotation.toFixed(2)}, 触摸点数：${e.pointers.length}`,
        repeatNum: 1
      })
      messageInstance.value.push(ins)
      if (messageInstance.value.length > 1) {
        messageInstance.value.shift()?.close()
      }
    }
    lastScale.value = e.scale
  })
})
</script>

<style scoped>
.gesture-area {
  height: 300px;
  line-height: 300px;
}
</style>
